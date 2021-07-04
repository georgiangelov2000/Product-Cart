import { createStore, applyMiddleware,combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import {
  userLoginReducer,
  userRegisterReducer,
  userDetailsReducer,
  userUpdateReducer
} from "./reducers/auth";

const initialState = {};
const middleware = [thunk];


const reducer=combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdate: userUpdateReducer,
})

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;