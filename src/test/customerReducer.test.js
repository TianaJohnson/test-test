import {customerReducer} from '../redux/reducers/customerReducer';

test('Should have its correct initial state', () => {
    let action = {type: 'SET_CUSTOMER', payload: 0 };
    let state = [];
    expect(customerReducer(state, action)).toBe(0);
})