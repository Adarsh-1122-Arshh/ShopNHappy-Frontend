import { applyMiddleware, createStore } from "redux"
import { thunk } from "redux-thunk"
import { reducer } from "../Common/Reducer/BazaarConbineReducer";


const thunkMiddleWear = applyMiddleware(thunk)
export const store =createStore(reducer, thunkMiddleWear);