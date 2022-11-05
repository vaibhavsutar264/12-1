import { combineReducers } from '@reduxjs/toolkit'
// import { userLoginReducer } from '../src/reducers/userReducers'
import userReducer from "./redux/slices/userSlice";
const rootReducer = combineReducers({
    userLogin: userReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer