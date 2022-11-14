import { ThunkAction } from 'redux-thunk'
import { configureStore, Action } from '@reduxjs/toolkit'
import rootReducer from './rootReducer'
// import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux'
// import  thunkMiddleware  from 'redux-thunk';

const persistConfig = {
  key: 'main-root',
  storage,
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

// const middleware = [...getDefaultMiddleware(), logger];
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
})

const persistedStore = persistStore(store)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export type AppThunk = ThunkAction<void, RootState, unknown, Action>

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const useAppDispatch: () => AppDispatch = useDispatch

export { persistedStore }

export default store
