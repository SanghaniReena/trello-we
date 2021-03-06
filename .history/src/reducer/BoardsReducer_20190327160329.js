import {Add_BOARD, FAILED, FETCH_BOARD} from "../action/BoardsAction"


const INITIAL_STATE={
    bTitle:"",
    boards:[]
}
const handleBoards=(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case FETCH_BOARD:
        {
            return Object.assign({},state,action.data)
        }
        case Add_BOARD:
        {            
            const newBoard=state.boards.concat(action.data);
            return Object.assign({},state,{boards:boards.newBoard});
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