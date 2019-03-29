import * as authService from "../service/authService"


export const BOARD_ACTION="BOARD_ACTION";
export const AddBoard=(data)=>{
    return (dispatch) => {
        authService.signup(data)
            .then((response) => {
                if (response.status === 200) {
                    dispatch({
                        type: USER_REG,
                        data: response.data.user
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