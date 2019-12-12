import { Observable, of } from 'rxjs';

import { Cheese, getTestCheese } from '../../models/Cheese';

export function getCheeses(): Observable<Cheese[]> {
    return of([getTestCheese(), getTestCheese(), getTestCheese(), getTestCheese(), getTestCheese()]);
}
