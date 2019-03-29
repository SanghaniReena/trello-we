import * as authService from "../service/authService"


export const Add_BOARD="ADD_BOARD";
export const FAILED="FAILED";

export const AddBoard=(data)=>{
    return (dispatch) => {
        authService.boards(data)
            .then((response) => {
                if (response.status === 200) {
                    dispatch({
                        type: Add_BOARD,
                        data: response.data.boards.bTitle
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
