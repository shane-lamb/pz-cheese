import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

import { Cheese } from '../../models/Cheese';

export function getCheeses(): Observable<Cheese[]> {
    return ajax.get('api/cheeses').pipe(map(x => x.response));
}
