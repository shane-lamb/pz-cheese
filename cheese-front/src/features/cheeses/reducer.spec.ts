import { cheesesReducer } from './reducer';
import { loadCheesesAsync, selectCheeseWeight, toggleCheeseCalculator } from './actions';
import { getTestCheese } from '../../models/Cheese';

const getInitialState = () => cheesesReducer(undefined, {} as any);

describe('cheeses reducer', () => {
    describe('get cheeses', () => {
        it('should initialise with no cheeses', function () {
            expect(getInitialState().cheeses).toEqual([]);
        });
        it('should update state with cheeses on action success', () => {
            const state = cheesesReducer(undefined, loadCheesesAsync.success([getTestCheese()]));

            expect(state.cheeses).toEqual([getTestCheese()]);
        });
    });
    describe('use calculator', () => {
        it('should initialise with empty state', function () {
            expect(getInitialState().calculators).toEqual({});
        });
        describe('toggle visibility', () => {
            it('should initialise a new entry', () => {
                const state = cheesesReducer(undefined, toggleCheeseCalculator({cheeseId: 1}));

                expect(state.calculators).toEqual({
                    1: {
                        visible: true,
                        selectedWeight: 0
                    }
                });
            });
            it('should update an existing entry', () => {
                const initialState = getInitialState();
                initialState.calculators[1] = {
                    visible: true,
                    selectedWeight: 5
                };

                const state = cheesesReducer(initialState, toggleCheeseCalculator({cheeseId: 1}));

                expect(state.calculators).toEqual({
                    1: {
                        visible: false, // toggled
                        selectedWeight: 5 // existing weight is maintained
                    }
                });
            });
            it('should preserve state of other calculators', () => {
                const initialState = getInitialState();
                initialState.calculators[1] = {
                    visible: true,
                    selectedWeight: 5
                };

                const state = cheesesReducer(initialState, toggleCheeseCalculator({cheeseId: 2}));

                expect(state.calculators).toEqual({
                    1: initialState.calculators[1],
                    2: {
                        visible: true,
                        selectedWeight: 0
                    }
                });
            });
        });
        describe('select weight', () => {
            it('should update an existing entry', () => {
                const initialState = getInitialState();
                initialState.calculators[1] = {
                    visible: true,
                    selectedWeight: 0
                };

                const state = cheesesReducer(initialState, selectCheeseWeight({
                    cheeseId: 1,
                    weight: 9
                }));

                expect(state.calculators).toEqual({
                    1: {
                        visible: true,
                        selectedWeight: 9
                    }
                });
            });
            it('should preserve state of other calculators', () => {
                const initialState = getInitialState();
                initialState.calculators = {
                    1: {
                        visible: false,
                        selectedWeight: 5
                    },
                    2: {
                        visible: true,
                        selectedWeight: 0
                    }
                };

                const state = cheesesReducer(initialState, selectCheeseWeight({cheeseId: 2, weight: 10}));

                expect(state.calculators).toEqual({
                    1: initialState.calculators[1],
                    2: {
                        visible: true,
                        selectedWeight: 10
                    }
                });
            });
        });
    });
});
