import * as authService from "../service/authService"


export const Add_BOARD="ADD_BOARD";
export const FETCH_BOARD="FETCH_BOARD";
export const FAILED="FAILED";

export const AddBoard=(data)=>{
   debugger
    return (dispatch) => {
        
        authService.boards(data)
            .then((response) => {
                
                if (response.status === 200) {
                    dispatch({
                        type: Add_BOARD,
                        data: response.data

                    });
                    console.log(response)
                }
            })
            .catch((error) => {
                if (error) {
                    dispatch({ type: FAILED, data: { error_msg: error.response.data.error } });
                }
            })
    }
}
export const FetchBoard=()=>{
    return (dispatch) => {
        authService.boardsname()
            .then((response) => {
                if (response.status === 200) {
                    dispatch({
                        type: FETCH_BOARD,
                        data:response.data
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

