import { createFeatureSelector, createSelector, DefaultProjectorFn, MemoizedSelector } from '@ngrx/store';
import { MergedRouteReducerState } from './merged-route';

const getRouterReducerState = createFeatureSelector<MergedRouteReducerState>('router');
const getMergedRoute = createSelector(getRouterReducerState, (routerReducerState) => routerReducerState.state);

const url = createSelector(getMergedRoute, a => a.url.split('?')[0]);
const urlParts = createSelector(url, a => a.split('/'));

const fullUrl = createSelector(getMergedRoute, a => a.url);
const fullUrlParts = createSelector(fullUrl, a => a.split('/'));


const queryParams = createSelector(getMergedRoute, a => a.queryParams);
const params = createSelector(getMergedRoute, a => a.params);
const data = createSelector(getMergedRoute, a => a.data);

const id: MemoizedSelector<object, any, DefaultProjectorFn<string>> = createSelector(params, data, queryParams, (p, d, q) => {
    if (p.id)
        return p.id;
    if (d.id)
        return d.id;
    if (q.id)
        return q.id;

    return '';
});


export const routerSelectors = {
    url: url,
    urlParts: urlParts,
    fullUrl: url,
    fullUrlParts: fullUrlParts,
    queryParams: queryParams,
    params: params,
    data: data,
    id: id
}