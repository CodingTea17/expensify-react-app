import { createStore } from 'redux';

// Action Generator
const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy
});

const resetCount = () => ({ type: 'RESET' });

const setCount = ({ count = 0 } = {}) => ({
  type: 'SET',
  count
});


const store = createStore((state = { count: 0}, action) => {
  switch(action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      };
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      };
    case 'RESET':
      return {
        count: 0
      };
    case 'SET':
      return {
        count: action.count
      };
    default:
      return state;
  }
});

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementCount({incrementBy: 5}));
store.dispatch(decrementCount({decrementBy: 6}));
store.dispatch(resetCount());
store.dispatch(setCount({count: 6}));


// Destructing EX.
// const item = ['coffee (hot)', '$2.00', '$2.50', '$2.75'];
// const [name, sm, md, lg] = item;
// console.log(`A medium ${name} costs ${md}`)
