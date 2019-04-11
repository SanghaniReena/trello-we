import * as authService from "../service/authService"

export const Add_TBOARD = "ADD_TBOARD";
export const FETCH_TBOARD = "FETCH_TBOARD";
export const FAILED = "FAILED";

export const AddTBoard = (data) => {
    return (dispatch) => {
        authService.teamboards(data)
            .then((response) => {

                if (response.status === 200) {

                    dispatch({
                        type: Add_TBOARD,
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
export const FetchTBoard = (id) => {

    return (dispatch) => {
        authService.teamboardsname(id)
            .then((response) => {

                if (response.status === 200) {
                    dispatch({
                        type: FETCH_TBOARD,
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

