import { createStore } from 'redux';
import reducers from './reducers/mainReducer';

// we are adding composeWithDevTools here to get easy access to the Redux dev tools
const store = createStore(reducers);

export default store;