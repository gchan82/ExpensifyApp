import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

import { createStore } from 'redux';

const incrementCount = ({ incrementBy = 1 } = {}) => ({ type: 'INCREMENT', incrementBy });
const decrementCount = ({ decrementBy = 1 } = {}) => ({ type: 'DECREMENT', decrementBy });
const setCount = ({ count }) => ({ type: 'SET', count });
const resetCount = () => ({ type: 'RESET' });


const store = createStore((state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':

            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':

            return {
                count: state.count - action.decrementBy
            };
        case 'SET':
            return {
                count: action.setBy
            };
        case 'RESET':
            return {
                count: 0
            };

        default:
            return state;
    }
    //     if (action.type === 'INCREMENT') {
    //         return {
    //             count: state.count + 1
    //         };
    //     } else {
    //         return state;
    //     }
});

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});


// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// });

store.dispatch(incrementCount({ incrementBy: 5 }));
store.dispatch(incrementCount());

store.dispatch({
    type: 'INCREMENT'
});

store.dispatch(
    incrementCount()
);
store.dispatch({
    type: 'RESET'
});
store.dispatch({
    type: 'DECREMENT',
});

store.dispatch(decrementCount());
store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(resetCount());
store.dispatch(setCount({ count: -101 }));




ReactDOM.render(
    <AppRouter />,
    document.getElementById("app")
);
