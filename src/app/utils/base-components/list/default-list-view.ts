import { ComponentType } from "@angular/cdk/portal";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "core/reducers";
import routerActions from "core/reducers/router-state/router.actions";
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

	abstract viewParts: any[];
	abstract formEditTitle: string;
	abstract formAddTitle: string;

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
			this.layoutUtils.open(this.dialogForm, { options: { header: this.formAddTitle } });
	}

	editEntity(id) {
		this.layoutUtils.open(this.dialogForm, { data: { id: id }, options: { header: this.formEditTitle } });
	}

	viewEntity(id) {
		this.store.dispatch(routerActions.navigate({ url: [...this.viewParts, "view", id] }))
	}

	deleteEntity(id) {
		this.layoutUtils.openDeletePrompt().subscribe(result => {
			if (result)
				this.store.dispatch(this.actions.deleteEntity({ id }))
		})
	}
}
