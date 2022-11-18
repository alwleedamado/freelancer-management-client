import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { TypedAction } from '@ngrx/store/src/models';
import { AppState } from 'core/reducers';
import { addErrorToRoot } from 'core/reducers/error-state/error-state.actions';
import uiActions from 'core/reducers/ui-state/ui-state.actions';
import { of, pipe } from 'rxjs';
import { catchError, exhaustMap, filter, map, mergeMap, switchMap, take, tap } from 'rxjs/operators';
import { LayoutUtilsService } from 'shared/services/layout-utils.service';
import { ToastEffectsConfig } from 'utils/helpers/toast-effects-config';
import { IngrxActions, IngrxSelectors } from 'utils/models/ngrx';
import { DataService } from 'utils/services/data.service';

export abstract class BaseEffect<T> {

    idSelector(entity: T): string | number {
        return entity["id"];
    }

    constructor(
        protected actions$: Actions,
        protected ngrxAction: IngrxActions<T>,
        protected dataService: DataService<T>,
        protected store: Store<AppState>,
        protected selectors: IngrxSelectors<T>,
        protected layoutUtilsService: LayoutUtilsService
    ) {

    }


    initialLoad$ = createEffect(() => this.actions$.pipe(
        ofType(this.ngrxAction.initialLoad),
        switchMap(action => this.store.select(this.selectors.selectDataInitialized)
            .pipe(
                take(1),
                filter(x => x == false),
                mergeMap(() => this.store.select(this.selectors.selectLastQuery)),
                take(1),
                map(result => this.ngrxAction.load({ page: result })),
            ))
    ));

    load$ = createEffect(() => this.actions$.pipe(
        ofType(this.ngrxAction.load),
        switchMap(action => this.dataService.getFilter(action.page)
            .pipe(
                map(result => this.ngrxAction.loadComplete({ data: result.items, totalCount: result.totalCount, page: action.page })),
                catchError(err => of(this.ngrxAction.loadFail({ error: err })))
            ))
    ));

    getAll$ = createEffect(() => this.actions$.pipe(
        ofType(this.ngrxAction.getAllRequest),
        switchMap(() => this.dataService.getAll()
            .pipe(
                map(result => this.ngrxAction.getAllComplete({ data: result })),
                catchError(err => of(this.ngrxAction.getAllFail({ error: err })))
            ))
    ));

    find$ = createEffect(() => this.actions$.pipe(
        ofType(this.ngrxAction.find),
        switchMap(action => this.dataService.get(action.id)
            .pipe(
                map(result => this.ngrxAction.findSucceeded({ payload: result })),
                catchError(err => {
                    this.layoutUtilsService.showError("Entity Not Found")
                    return of(this.ngrxAction.findFail({ error: err }))
                })
            ))
    ));

    create$ = createEffect(() => this.actions$.pipe(
        ofType(this.ngrxAction.createEntity),
        exhaustMap(action => this.dataService.create(action.payload)
            .pipe(
                tap(_ => this.layoutUtilsService.showSuccess("Entity Created Successfully")),
                map(result => this.ngrxAction.createEntitySucceeded({ payload: result })),
                catchError(err => {
                    this.layoutUtilsService.showError('Failed to Create Entity')
                    return of(this.ngrxAction.createEntityFailed({ error: err }))
                })
            ))
    ));

    updateEntity$ = createEffect(() => this.actions$.pipe(
        ofType(this.ngrxAction.updateEntity),
        exhaustMap(action => this.dataService.update(action.id, action.data)
            .pipe(
                map(result => {
                    this.layoutUtilsService.showSuccess("Entity Updated Successfully")
                    if (result)
                        return this.ngrxAction.updateEntitySucceeded({ data: result })
                    else if (action.data)
                        return this.ngrxAction.updateEntitySucceeded({ data: { ...action.data, id: action.id } })
                }),
                catchError(err => {
                    this.layoutUtilsService.showError("Couldn't Update Entity")
                    return of(this.ngrxAction.updateEntityFailed({ error: err, id: action.id }))
                }
                )
            ))
    ));

    delete$ = createEffect(() => this.actions$.pipe(
        ofType(this.ngrxAction.deleteEntity),
        exhaustMap(action => this.dataService.delete(action.id)
            .pipe(
                tap(_ => this.layoutUtilsService.showSuccess("Entity Deleted Successfully")),
                map(result => this.ngrxAction.deleteEntitySucceeded({ payload: action.id })),
                catchError(err => {
                    this.layoutUtilsService.showError("Couldn't Delete Entity")
                    return of(this.ngrxAction.deleteEntityFailed({ error: err, id: action.id }))
                })
            ))
    ));


    generalErrorLog$ = createEffect(() => this.actions$.pipe(
        ofType(
            this.ngrxAction.loadFail,
            this.ngrxAction.getAllFail,
            this.ngrxAction.findFail,
            this.ngrxAction.createEntityFailed,
            this.ngrxAction.updateEntityFailed,
            this.ngrxAction.deleteEntityFailed
        ),
        map(actions => addErrorToRoot({ lastError: actions.error })),
    ));
}