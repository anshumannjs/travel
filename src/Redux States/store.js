import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'
import cityInfos from './CityInfo'
import thunk from 'redux-thunk'
import {FLUSH, PAUSE, PERSIST, persistReducer, PURGE, REGISTER, REHYDRATE} from 'redux-persist'
import persistStore from 'redux-persist/es/persistStore'
import storage from 'redux-persist/lib/storage'
import logger from 'redux-logger'

const persistConfig={
    key: "root",
    storage
}

const persistedReducer= persistReducer(persistConfig,cityInfos)

export const store = configureStore({
    reducer:{
        City: persistedReducer,
    },
    middleware: getDefaultMiddleware=>
    getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [PERSIST]
        }
    })
})

export const persistor=persistStore(store);