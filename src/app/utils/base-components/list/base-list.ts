import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { IPageState, QueryParamsModel } from "core/models";
import { AppState } from "core/reducers";
import { routerSelectors } from "core/reducers/router-state/router.selectors";
import produce from "immer";
import { Observable } from "rxjs";
import { IngrxActions, IngrxSelectors } from "utils/models/ngrx";
import { RouteData } from "utils/models/route-data";
import { NgrxDataSource } from "utils/ngrx/ngrx.datasource";
import { IBaseList } from "./base-lsit.interface";

@Injectable()
export abstract class BaseList<T> implements IBaseList {

	defaultInitialLoadDispatch = true

	abstract loading$: Observable<boolean>

	abstract title: string;
	abstract columns: string[];

	abstract moduleName: string;
	abstract componentName: string;

	abstract dataSource: NgrxDataSource<T>;

	isOffline = false;

	abstract addEntity();
	abstract editEntity(id: any);
	abstract viewEntity(id);
	abstract deleteEntity(id);

	/// whether to load the list data or not
	// set to false if you need to fetch data with non-standard way
	dispatchFindAction = true;

	currentQueryParams: QueryParamsModel;
	componentActive = true;

	constructor(
		public store: Store<AppState>,
		protected actions: IngrxActions<T>,
		protected selectors: IngrxSelectors<T>) {
	}

	// get module name and entity name from current route-data
	private setModuleEntityNames() {
		this.store.pipe(select(routerSelectors.data))
			.subscribe((r: RouteData) => {
				this.moduleName = r.module
				this.componentName = r.component
			})
	}


	ngOnInit() {
		if (this.dispatchFindAction)
			this.isOffline ?
				this.store.dispatch(this.actions.getAllRequest()) :
				this.defaultInitialLoadDispatch &&
				this.store.dispatch(this.actions.initialLoad())

		this.store
			.pipe(
				select(this.selectors.selectLastQuery))
			.subscribe(query => this.currentQueryParams = produce(query, newQuery => { }));


		// when module-name & component name arenot set, use this default
		if (!(this.moduleName && this.componentName)) {
			this.setModuleEntityNames()
		}

		this.storeSubscription();

	}

	storeSubscription() {
	}

	ngOnDestroy() {
		this.componentActive = false;
	}


	pagenatorChange(page: IPageState) {
		this.currentQueryParams = produce(this.currentQueryParams, query => {
			query.pageSize = page.pageSize;
			query.pageNumber = page.pageNumber;
		});
		this.loadList();
	};


	loadList(event?: any) {
		this.currentQueryParams = produce(this.currentQueryParams, query => {
			query.sortField = event.sortField;
			query.sortOrder = event.sortOrder == 1 ? 'asc' : 'desc';
		});
		this.store.dispatch(this.actions.load({ page: this.currentQueryParams }));
	}
}
