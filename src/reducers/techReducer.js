import { GET_TECHS, ADD_TECH, SET_LOADING, DELETE_TECH, TECHS_ERROR} from "../actions/Types";

const initialState={
    techs: null,
    loading: false,
    error: null
}

const techReducer = (state=initialState, action )=>{
    switch(action.type){
        case SET_LOADING:
            return{
                ...state,
                loading:true
            };
        case GET_TECHS:
            return{
                ...state,
                techs: action.payload,
                loading: false
            };
        case ADD_TECH:
            return{
                ...state,
                techs:[...state.techs, action.payload],
                loading: false
            };
        case DELETE_TECH:
            return{
                ...state,
                techs: state.techs.filter(tech=> tech.id!==action.payload)
            }; 
            case TECHS_ERROR:
                console.error(action.payload)
                return{
                    ...state,
                    error:action.payload
                };    
            default:
                return state
        }
    }

    export default techReducer;