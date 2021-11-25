import { createStore } from 'redux'


import reducer from '../Redux/reducers/index'

export default function configureStore(initialState) {
    const store = createStore(reducer, initialState);
    return store;
}