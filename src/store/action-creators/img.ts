import { Dispatch } from "redux";
import axios from 'axios';
import { ImgAction, ImgActionTypes } from "../../types/img";

export const fetchImgs = (page = 1, limit = 10) => {
    return async (dispatch: Dispatch<ImgAction>) => {
        try {
            dispatch({type: ImgActionTypes.FETCH_IMGS})
            const response = await axios.get('https://jsonplaceholder.typicode.com/photos', {
                params: {_page: page, _limit: limit}
            })
            setTimeout(() => {
                dispatch({type: ImgActionTypes.FETCH_IMGS_SUCCESS, payload: response.data})
            }, 500)
        } catch (e) {
            dispatch({
                type: ImgActionTypes.FETCH_IMGS_ERROR,
                payload: 'Произошла ошибка при загрузке списка дел'
            })
        }
    }
}


export function setImgPage(page: number): ImgAction {
    return { type: ImgActionTypes.SET_IMG_PAGE, payload: page}
}