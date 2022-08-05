import {combineReducers} from 'redux';
import { ImgReducer } from './imgReduser';
import { todoReducer } from './todoReducer';
import { userReduser } from './userReducer';


export const rootReducer = combineReducers({
    user: userReduser,
    todo: todoReducer,
    img: ImgReducer,
})

export type RootState = ReturnType<typeof rootReducer>