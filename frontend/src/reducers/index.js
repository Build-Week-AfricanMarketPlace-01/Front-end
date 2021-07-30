import { ADD_ITEM, GET_ITEM, EDIT_ITEM, FINISHED_EDIT, ADDING_NEW_ITEM, DELETE_ITEM } from "../actions";

const initialState  = {
    items :[],
    newItemId : null,
    editItem:  null
}

const reducer = (state = initialState, action)=>{
    switch (action.type) {
        case ADD_ITEM:
            return {
                ...state,
                items: [...state.items, action.payload]
            }
        case ADDING_NEW_ITEM:
            return{
                ...state,
                newItemId: action.payload
            }
        case GET_ITEM:
            return{
                ...state,
                items: action.payload
            }
        case EDIT_ITEM:
            return{
                ...state,
                editItem: action.payload
            }
        case FINISHED_EDIT:
            return{
                ...state,
                editItem: null
            }
        case DELETE_ITEM:
            return{
                ...state,
                deleteItem: state.deleteItem.filter(
                    (id) => id.class_id !== action.payload
                ),
            }
        default:
            return state
    }
}

export default reducer;