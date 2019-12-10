import { cheesesReducer } from './reducer';
import { loadCheesesAsync } from './actions';
import { Cheese } from '../../models/Cheese';

const getTestCheese = () => new Cheese(1, 'name', 'imageUrl', 'color', 10);

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
