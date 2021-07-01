import { GET_LOGS, SET_LOADING, LOGS_ERROR, ADD_LOG, DELETE_LOG, 
    SET_CURRENT, UPDATE_LOG,CLEAR_CURRENT, SEARCH_LOGS } from "./Types";
import axios from 'axios';



// get logs

export const getLogs=()=>async dispatch=>{
    try {
        setLoding()
        const res= await axios.get('/logs')
        const logs= res.data;
                    dispatch({
                        type:GET_LOGS,
                        payload:logs
                    })
      
        
    } catch (err) {
        dispatch({
            type:LOGS_ERROR,
            payload: err
        })
    }

}

// Add logs

export const addLogs=(log)=>async dispatch=>{
    try {

         const res=await axios('/logs',{ 
             method:'POST',
            data: log, 
            headers:{
                'Content-Type': 'application/json'
            }
           });
         const logs= res.data;
        //  console.log(logs)
                    dispatch({
                        type:ADD_LOG,
                        payload:logs
                    })
       
        
    } catch (err) {
        dispatch({
            type:LOGS_ERROR,
            payload: err
        })
    }
}

// Search logs

export const searchLogs=(text)=>async dispatch=>{
    try {
        setLoding()
        const res= await axios.get(`/logs/?q=${text}`)
            const logs= res.data;
                    dispatch({
                        type:SEARCH_LOGS,
                        payload:logs
                    })
      
        
    } catch (err) {
        dispatch({
            type:LOGS_ERROR,
            payload: err
        })
    }

}


// Update logs

export const updateLogs=(log)=>async dispatch=>{
    try {

         const res=await axios(`/logs/${log.id}`,{ 
             method:'PUT',
            data: log, 
            headers:{
                'Content-Type': 'application/json'
            }
           });
         const logs= res.data;
        //  console.log(logs)
                    dispatch({
                        type:UPDATE_LOG,
                        payload:logs
                    })
       
        
    } catch (err) {
        dispatch({
            type:LOGS_ERROR,
            payload: err
        })
    }
}

//set Current
    export const setCurrent=(log)=>{
        return{
            type: SET_CURRENT,
            payload: log
        }
    }
    //Clear Current
    export const clearCurrent=()=>{
        return{
            type: CLEAR_CURRENT
        }
    }

// Delete logs

export const deleteLogs=(id)=>async dispatch=>{
    try {
        setLoding()
           await axios.delete(`/logs/${id}`)
    
                    dispatch({
                        type:DELETE_LOG,
                        payload:id
                    })
      
        
    } catch (err) {
        dispatch({
            type:LOGS_ERROR,
            payload: err
        })
    }

}

export const setLoding=()=>{
    return {
        type: SET_LOADING
    }
}

