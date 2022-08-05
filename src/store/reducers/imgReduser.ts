import { ImgAction, ImgActionTypes, ImgState } from "../../types/img"

const initialState: ImgState = {
    imgs: [],
    page: 1,
    error: null,
    limit: 10,
    loading: false
}

export const ImgReducer = (state = initialState, action: ImgAction): ImgState => {
    switch (action.type) {
        case ImgActionTypes.FETCH_IMGS: 
        return {...state, loading: true}
        case ImgActionTypes.FETCH_IMGS_SUCCESS: 
        return {...state, loading: false, imgs: action.payload}
        case ImgActionTypes.FETCH_IMGS_ERROR: 
        return {...state, loading: false, error: action.payload}
        case ImgActionTypes.SET_IMG_PAGE: 
        return {...state, page: action.payload }
        default:
            return state 
    }
}