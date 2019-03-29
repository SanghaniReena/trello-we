import * as authService from "../service/authService"


export const USER_REG="USER_REG";
export const USER_LOGIN="USER_LOGIN"
export const FETCH_USERS="FETCH_USERS"
export const FAILED="FAILED";
export const userRegAction=(data)=>{
    return (dispatch) => {
        authService.signup(data)
            .then((response) => {
               
                if (response.status === 200) {
                    dispatch({
                        type: USER_REG,
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
export const FetchUsers=()=>{
    return (dispatch) => {
        authService.getUsers()
            .then((response) => {
                if (response.status === 200) {
                    dispatch({
                        type: FETCH_USERS,
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


export const userloginAction=(data)=>{
    
    return (dispatch) => {
      return  authService.login(data)
            .then((response) => {
                localStorage.setItem("status",response.status);
                 //console.log("ssssssssssssss", response.results[0].name)
                // localStorage.setItem("user name", response.results[0].name)
                localStorage.setItem("name",response.results)

                if (response.status === 200) {
                    dispatch({
                        type: USER_LOGIN,
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