import * as authService from "../service/authService"
export const USER_REG="USER_REG";
export const FAILED="FAILED";
export const userRegAction=(data)=>{
    return (dispatch) => {
        authService.signup(data)
            .then((response) => {
                if (response.status === 200) {
                    dispatch({
                        type: USER_REG,
                        data: data
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