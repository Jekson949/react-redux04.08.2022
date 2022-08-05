import * as UserActionCreators from './user';
import * as TodoActionCreators from './todo';
import * as ImgActionCreators from './img'

export default {
    ...TodoActionCreators,
    ...UserActionCreators,
    ...ImgActionCreators,
}