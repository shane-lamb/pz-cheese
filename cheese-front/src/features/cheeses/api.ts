import { Observable, of } from 'rxjs';

import { Cheese } from '../../models/Cheese';

export function getCheeses(): Observable<Cheese[]> {
    return of([]);
}
