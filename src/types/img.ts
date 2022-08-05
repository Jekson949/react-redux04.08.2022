export interface ImgState {
    imgs: any[];
    loading: boolean;
    error: null | string;
    page: number;
    limit: number;
}

export enum ImgActionTypes {
    FETCH_IMGS = 'FETCH_IMGS',
    FETCH_IMGS_SUCCESS = 'FETCH_IMGS_SUCCESS',
    FETCH_IMGS_ERROR = 'FETCH_IMGS_ERROR',
    SET_IMG_PAGE = 'SET_IMG_PAGE',
}
interface FetchImgAction {
    type: ImgActionTypes.FETCH_IMGS
}
interface FetchImgSuccessAction {
    type: ImgActionTypes.FETCH_IMGS_SUCCESS,
    payload: any[];
}
interface FetchImgErrorAction {
    type: ImgActionTypes.FETCH_IMGS_ERROR;
    payload: string;
}
interface SetImgPage {
    type: ImgActionTypes.SET_IMG_PAGE;
    payload: number;
}

export type ImgAction = 
    FetchImgAction 
    | FetchImgErrorAction 
    | FetchImgSuccessAction 
    | SetImgPage