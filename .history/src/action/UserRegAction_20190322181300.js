import * as authService from "../service/authService"
export const USER_REG="USER_REG";
export const FAILED="FAILED";
export const userRegAction=(data)=>{
    return (dispatch) => {
        authService.signup(data)
            .then((response) => {
                if (response.status === 200) {
                    this.props.history.push("/");

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
