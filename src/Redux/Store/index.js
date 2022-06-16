import {
    combineReducers,
    configureStore,
} from '@reduxjs/toolkit';

import {persistStore, persistReducer} from 'redux-persist';
import storage from "redux-persist/lib/storage";
import { encryptTransform } from "redux-persist-transform-encrypt";
import expReducer from '../Reducers/expReducer';


const persistConfig = {
    key: 'root',
    storage,
    transforms: [
        encryptTransform({
            onError:(error)=> {
                console.log(error);
            },
            secretKey: 'Sidath'
        }),
    ],
};

const combinedReducer = combineReducers({ 
    userIdExp: expReducer,
  });
  
  const persistedReducer = persistReducer(persistConfig, combinedReducer);
  
  const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });
  
  const persistor = persistStore(store);
  
  export { store, persistor };