import {Add_BOARD} from "../action/BaordsAction"


INIAL_STATE={
    boards:[],
    bTitle:""
}
const handleBoards=(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case Add_BOARD:
        {
            const newBoard=state.boards.concat(action.data);
            return Object.assign({},state,{boards:newBoard});
        }
        
       
       default:
            return state;
    }
}
export default handleBoards