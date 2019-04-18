import * as authService from "../service/authService"

export const ADD_CARD = "ADD_CARD";
export const FETCH_CARD = "FETCH_CARD";
export const FAILED = "FAILED";

export const AddCard = (data) => {

    return (dispatch) => {
        authService.cards(data)
            .then((response) => {
                if (response.status === 200) {
                    dispatch({
                        type: ADD_CARD,
                        data: response.data,
                    });
                }
            })
            .catch((error) => {
                if (error) {
                    dispatch({ type: FAILED, data: { error_msg: error.response.data.error } });
                }
            })
    }
}
export const FetchCard = (id) => {

    return (dispatch) => {
        authService.cardsname(id)
            .then((response) => {

                if (response.status === 200) {
                    dispatch({
                        type: FETCH_CARD,
                        data: response.data
                    });
                }
            })
            .catch((error) => {
                if (error) {
                    dispatch({ type: FAILED, data: { error_msg: error.response.data.error } });
                }
            })
    }
}
