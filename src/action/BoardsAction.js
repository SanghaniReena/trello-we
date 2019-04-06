import * as authService from "../service/authService"


export const Add_BOARD = "ADD_BOARD";
export const FETCH_BOARD = "FETCH_BOARD";
export const FAILED = "FAILED";

export const AddBoard = (data) => {

    return (dispatch) => {
        authService.boards(data)
            .then((response) => {

                if (response.status === 200) {
                   
                    dispatch({
                        type: Add_BOARD,
                        data: response.data,
                        signup:response.data.signup
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
export const FetchBoard = (id) => {


    return (dispatch) => {
        authService.boardsname(id)
            .then((response) => {
              
                if (response.status === 200) {
                    dispatch({
                        type: FETCH_BOARD,
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
// export const FetchBoardi = (id,history) => {
    
//         return (dispatch) => {
//             authService.boardname(id)
//                 .then((response) => {
//                     if (response.status === 200) {
//                         dispatch({
//                             type: FETCH_BOARD,
//                             data: response.data
//                         });
//                     }
//                     history.push('/board/'+id)
//                 })
//                 .catch((error) => {
//                     if (error) {
//                         dispatch({ type: FAILED, data: { error_msg: error.response.data.error } });
//                     }
//                 })
//         }
//     }


