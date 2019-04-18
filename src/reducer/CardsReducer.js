import { ADD_CARD, FAILED, FETCH_CARD } from "../action/CardsAction"
const INITIAL_STATE = {
    cards: []
}
const handleCards = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case FETCH_CARD:
            {
                return Object.assign({}, state, { cards: action.data })
            }

        case ADD_CARD:
            {
                const newdata = state.cards.concat(action.data);
                return Object.assign({}, state, { cards: newdata })

            }
        case FAILED:
            {
                return Object.assign({}, state, { error_msg: action.data.error_msg });
            }

        default:
            return state;
    }
}
export default handleCards