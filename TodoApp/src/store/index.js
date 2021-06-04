import {createStore, applyMiddleware} from 'redux';
import { getTodos } from './reducers/todos.js';

export const store = createStore(getTodos)