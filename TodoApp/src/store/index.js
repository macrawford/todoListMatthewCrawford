import {createStore, applyMiddleware} from 'redux';
import { getTodos } from './reducers/todos.js';

// export default const store means you can import it in other modules with just import store
// if you do export const store you have to import {store}

export const store = createStore(getTodos)