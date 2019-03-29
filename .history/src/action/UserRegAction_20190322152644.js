export const USER_REG="USER_REG";
export const userRegAction=(data)=>{
    return (dispatch) => {
        authService.signup(credentials)
            .then((response) => {
                if (response.status === 200) {
                    dispatch({
                        type: REGISTER_SUCCESSFUL,
                        users: { email: response.data.user.email }
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