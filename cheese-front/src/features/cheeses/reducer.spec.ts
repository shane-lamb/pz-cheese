import { cheesesReducer } from './reducer';
import { loadCheesesAsync } from './actions';
import { getTestCheese } from '../../models/Cheese';

describe('cheeses reducer', () => {
    describe('getting cheeses', () => {
        it('should initialise with no cheeses', function () {
            const initialState = cheesesReducer(undefined, {} as any);
            expect(initialState.cheeses).toEqual([]);
        });
        it('should update state with cheeses on action success', () => {
            const state = cheesesReducer(undefined, loadCheesesAsync.success([getTestCheese()]));
            expect(state.cheeses).toEqual([getTestCheese()]);
        });
    });
});
