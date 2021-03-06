import {Add_BOARD, FAILED, FETCH_BOARD} from "../action/BoardsAction"


const INITIAL_STATE={
    boards:[],
    bTitle:""
}
const handleBoards=(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case FETCH_BOARD:
        {
            return{
                ...state,
                boards:action.data
            }

        }
        case Add_BOARD:
        {
            debugger;
            return{
            ...state,
            boards:[...action.data]
            }
        }
        case FAILED:
        {
            return Object.assign({}, state, { error_msg: action.data.error_msg });
        }
       
       default:
            return state;
    }
}
export default handleBoards