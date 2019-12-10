import { isActionOf, RootEpic } from 'typesafe-actions';
import { first, filter, map, catchError, switchMap } from 'rxjs/operators'
import { of } from 'rxjs';

import { loadCheesesAsync } from './actions';
import { getCheeses } from './api';

export const loadCheeses: RootEpic = action$ =>
    action$.pipe(
        filter(isActionOf(loadCheesesAsync.request)),
        switchMap(() =>
            getCheeses().pipe(
                map(cheeses => loadCheesesAsync.success(cheeses)),
                catchError(message => of(loadCheesesAsync.failure(message)))
            )
        )
    );

export const loadDataOnAppStart: RootEpic = action$ =>
    action$.pipe(
        first(),
        map(() => loadCheesesAsync.request())
    );
