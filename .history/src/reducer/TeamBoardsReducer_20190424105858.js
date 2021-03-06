import { Add_TBOARD, EDIT_TBOARD, FAILED, FETCH_IBOARD, FETCH_TBOARD } from "../action/TeamBoardsAction"


const INITIAL_STATE = {
    Tboards: [],
    idteams: 0,
    teamboards: []

}
const handleTBoards = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case FETCH_TBOARD:
            {
                return Object.assign({}, state, { Tboards: action.data })
            }

        case FETCH_IBOARD:
            {

                return Object.assign({}, state, { teamboards: action.data })
            }
        case Add_TBOARD:
            {
                const newdata = state.Tboards.concat(action.data);
                return Object.assign({}, state, { Tboards: newdata })
            }
             
        case EDIT_TBOARD:
        {
            return
        } 
        case FAILED:
            {
                return Object.assign({}, state, { error_msg: action.data.error_msg });
            }

        default:
            return state;
    }
}
export default handleTBoards