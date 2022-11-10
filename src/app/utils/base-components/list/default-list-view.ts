import { ComponentType } from "@angular/cdk/portal";
import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { AppState } from "core/reducers";
import routerActions from "core/reducers/router-state/router.actions";
import { skip, takeWhile } from "rxjs/operators";
import { LayoutUtilsService } from "shared/services/layout-utils.service";
import { IngrxActions, IngrxSelectors } from "utils/models/ngrx";
import { BaseDialogForm } from "../form/base-dialog-form";
import { BaseRoutingForm } from "../form/base-routing-form";
import { BaseList } from "./base-list";

@Injectable()
export abstract class DefaultListView<T> extends BaseList<T>  {
	get loading$() {
		return this.dataSource.loading$;
	}

	moduleName: string;
	componentName: string;
	icon = '';

	abstract viewParts: any[];

	constructor(
		protected layoutUtils: LayoutUtilsService,
		protected dialogForm: ComponentType<BaseDialogForm<T>> | ComponentType<BaseRoutingForm<T>>,

		store: Store<AppState>,
		actions: IngrxActions<T>,
		selectors: IngrxSelectors<T>

	) {
		super(store, actions, selectors);
	}



	addEntity() {
		if (this.dialogForm)
			this.layoutUtils.open(this.dialogForm);
	}

	editEntity(id) {
		this.layoutUtils.open(this.dialogForm, { data: { id: id } });
	}

	viewEntity(id) {
		this.store.dispatch(routerActions.navigate({ url: [...this.viewParts, "view", id] }))
	}

	deleteEntity(id) {
		this.layoutUtils.deletePrompt().subscribe(result => {
			if (result)
				this.store.dispatch(this.actions.deleteEntity({ id }))
		})
	}
}
