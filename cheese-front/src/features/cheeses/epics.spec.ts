import { TestScheduler } from 'rxjs/testing';
import { throwError } from 'rxjs';

jest.mock('./api');
import { getCheeses } from './api';

import { loadCheeses, loadDataOnAppStart } from './epics';
import { loadCheesesAsync } from './actions';
import { getTestCheese } from '../../models/Cheese';

const testScheduler = () => new TestScheduler((actual, expected) => {
    expect(actual).toEqual(expected);
});

describe('cheeses epics', () => {
    describe('loading cheeses', () => {
        it('should trigger state update on API success', () => {
            testScheduler().run(({ hot, cold, expectObservable }) => {
                (getCheeses as any).mockReturnValue(cold('--a', {
                    a: [getTestCheese()]
                }));

                const action$ = hot('-a', {
                    a: loadCheesesAsync.request()
                });
                const output$ = loadCheeses(action$ as any, null as any, undefined);

                expectObservable(output$).toBe('---a', {
                    a: loadCheesesAsync.success([getTestCheese()])
                });
            });
        });
        it('should fail gracefully on API error', () => {
            testScheduler().run(({ hot, expectObservable }) => {
                (getCheeses as any).mockReturnValue(throwError('error message'));

                const action$ = hot('-a', {
                    a: loadCheesesAsync.request()
                });
                const output$ = loadCheeses(action$ as any, null as any, undefined);

                expectObservable(output$).toBe('-a', {
                    a: loadCheesesAsync.failure('error message')
                });
            });
        });
        it('should load cheeses on app start', () => {
            testScheduler().run(({ hot, expectObservable }) => {
                const action$ = hot('-a', {
                    a: {}
                });
                const output$ = loadDataOnAppStart(action$ as any, null as any, undefined);

                expectObservable(output$).toBe('-(a|)', {
                    a: loadCheesesAsync.request()
                });
            });
        });
    });
});
