import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { TypedAction } from '@ngrx/store/models';
import { AppState } from 'core/reducers';
import { registerError } from 'core/reducers/error-state/error-state.actions';
import uiActions from 'core/reducers/ui-state/ui-state.actions';
import { Observable, of, pipe } from 'rxjs';
import { catchError, exhaustMap, filter, map, mergeMap, switchMap, take } from 'rxjs/operators';
import { ToastEffectsConfig } from 'utils/helpers/toast-effects-config';
import { IngrxActions, IngrxSelectors } from 'utils/models/ngrx';
import { DataService } from 'utils/services/data.service';

export abstract class BaseEffect<T> {

    idSelector(entity: T): string | number {
        return entity["id"];
    }

    refreshActivityLogs$: Observable<any>;
    private logsReloadTriggersActions = []


    constructor(
        protected actions$: Actions,
        protected ngrxAction: IngrxActions<T>,
        protected dataService: DataService<T>,
        protected store: Store<AppState>,
        protected selectors: IngrxSelectors<T>
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
        mergeMap(action => this.dataService.get(action.id)
            .pipe(
                map(result => this.ngrxAction.findComplete({ payload: result })),
                catchError(err => of(this.ngrxAction.findFail({ error: err })))
            ))
    ));

    create$ = createEffect(() => this.actions$.pipe(
        ofType(this.ngrxAction.addNew),
        exhaustMap(action => this.dataService.create(action.payload)
            .pipe(
                map(result => this.ngrxAction.addNewComplete({ payload: result })),
                catchError(err => of(this.ngrxAction.addNewFail({ error: err })))
            ))
    ));

    updateRequest$ = createEffect(() => this.actions$.pipe(
        ofType(this.ngrxAction.updateRequest),
        exhaustMap(action => this.dataService.update(action.id, action.data)
            .pipe(
                map(result => {
                    if (result)
                        return this.ngrxAction.updateComplete({ data: result })
                    else if (action.data)
                        return this.ngrxAction.updateComplete({ data: { ...action.data, id: action.id } })
                }),
                catchError(err => of(this.ngrxAction.updateFail({ error: err, id: action.id })))
            ))
    ));

    delete$ = createEffect(() => this.actions$.pipe(
        ofType(this.ngrxAction.deleteEntity),
        mergeMap(action => this.dataService.delete(action.id)
            .pipe(
                map(result => this.ngrxAction.deleteComplete({ payload: action.id })),
                catchError(err => of(this.ngrxAction.deleteFail({ error: err, id: action.id })))
            ))
    ));


    generalErrorLog$ = createEffect(() => this.actions$.pipe(
        ofType(
            this.ngrxAction.loadFail,
            this.ngrxAction.getAllFail,
            this.ngrxAction.findFail,
            this.ngrxAction.addNewFail,
            this.ngrxAction.updateFail,
            this.ngrxAction.deleteFail
        ),
        map(actions => registerError({ error: actions.error }))
    ));


    toastEffectsCreator(config: ToastEffectsConfig)  {
        const { success, failure } = config
        
        return pipe(ofType(...[success.action, failure.action]),
            map((action: any & TypedAction<string>) => {
                if (action.type == success.action.type)
                    return uiActions.showSuccessToastr({ title: success.title, message: success.message })
                if (action.type == failure.action.type)
                    return uiActions.showErrorToastr({ title: failure.title, message: failure.message })
            }));
        }

}