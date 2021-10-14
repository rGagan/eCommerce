import reducers from "./reducers/index";
import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
    key: "Products",
    storage
}

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = createStore(persistedReducer, /* preloadedState, */ 
    composeEnhancers(applyMiddleware(thunk))
    );


export const persistor = persistStore(store);




