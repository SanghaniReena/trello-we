import {Add_BOARD, FAILED, FETCH_BOARD} from "../action/BaordsAction"


const INITIAL_STATE={
    boards:[],
    bTitle:""
}
const handleBoards=(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case FETCH_BOARD:
        {
            return Object.assign({},state,{boards:boards})
        }
        case Add_BOARD:
        {
            const newBoard=state.boards.concat(action.data);
            return Object.assign({},state,{boards:newBoard});
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