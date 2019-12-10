import { Observable, of } from 'rxjs';

import { Cheese } from '../models/Cheese';

export function get(): Observable<Cheese[]> {
    return of([]);
}
