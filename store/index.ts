import { applyMiddleware, createStore, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import { PatientState } from '../store/patient/types';
import storage from 'redux-persist/lib/storage';

import rootReducer from "./rootReducer";

export interface ApplicationState {
	patient: PatientState;
}

const persistConfig = {
	key: "main-root",
	storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();

const store: Store<ApplicationState> = createStore(
	persistedReducer,
	applyMiddleware(sagaMiddleware)
);

const Persistor = persistStore(store);

export { Persistor };
export default store;