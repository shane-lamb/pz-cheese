import { RootEpic } from 'MyTypes';
import { isActionOf } from 'typesafe-actions';
import { first, filter, map, catchError, switchMap } from 'rxjs/operators'
import { of } from 'rxjs';

import { loadCheesesAsync } from './actions';

export const loadCheeses: RootEpic = (action$, store, {api}) =>
    action$.pipe(
        filter(isActionOf(loadCheesesAsync.request)),
        switchMap(() =>
            api.cheeses.get().pipe(
                map(loadCheesesAsync.success),
                catchError(message => of(loadCheesesAsync.failure(message)))
            )
        )
    );

export const loadDataOnAppStart: RootEpic = action$ =>
    action$.pipe(
        first(),
        map(loadCheesesAsync.request)
    );
