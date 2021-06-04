import {createStore, applyMiddleware} from 'redux';
// import { AsyncStorage } from 'react-native';
import { getTodos } from './reducers/todos.js';
// import { persistStore, persistReducer } from 'redux-persist';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import storage from 'redux-persist/lib/storage';
// import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

// const persistConfig = {
//   key: 'primary',
//   storage: AsyncStorage
// };

// const pReducer = persistReducer(persistConfig, getTodos);

// export const store = createStore(pReducer);
// export const persistor = persistStore(store);

export const store = createStore(getTodos)

// export default const store means you can import it in other modules with just import store
// if you do export const store you have to import {store}