import { combineReducers, createStore } from "redux";
import counterReducer from "../reducers/counterReducer";
const rootReducer = combineReducers ({
    counter:counterReducer
})
const store = createStore(rootReducer)
export default store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;