import { GET_LOGS, LOGS_ERROR, SET_LOADING, ADD_LOG, DELETE_LOG, UPDATE_LOG, SET_CURRENT, CLEAR_CURRENT, SEARCH_LOGS } from "../actions/Types";

const initialState={
    logs: null,
    loading: false,
    current: null,
    error: null
}

const logReducer = (state=initialState, action )=>{
    switch(action.type){
        case SET_LOADING:
            return{
                ...state,
                loading:true
            }
        case GET_LOGS:
            return{
                ...state,
                logs:action.payload,
                loading: false
            }
        case ADD_LOG:
            return{
                ...state,
                logs:[...state.logs, action.payload],
                loading: false
            }    
        case DELETE_LOG:
            return{
                ...state,
                logs: state.logs.filter(log=> log.id!==action.payload)
            }    
        case UPDATE_LOG:
            return{
                ...state,
                logs: state.logs.map(log=>log.id===action.payload.id? action.payload: log)
            }    
        case SET_CURRENT:
            return{
                ...state,
                current:action.payload
            } 
        case CLEAR_CURRENT:
            return{
                ...state,
                current:null
            }       
        case SEARCH_LOGS:
            return{
                ...state,
                logs: action.payload
            }    
        case LOGS_ERROR:
            console.error(action.payload)
            return{
                ...state,
                error:action.payload
            }
        default:
            return state;
    }
}
export default logReducer;