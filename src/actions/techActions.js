import { GET_TECHS, SET_LOADING, TECHS_ERROR, ADD_TECH, DELETE_TECH } from "./Types";
import axios from 'axios';



// get techs

export const getTechs=()=>async dispatch=>{
    try {
        const res= await axios.get('/techs')
        
        const techs=await res.data;
        console.log(techs)
                    dispatch({
                        type:GET_TECHS,
                        payload:techs
                    })
      
        
    } catch (err) {
        dispatch({
            type:TECHS_ERROR,
            payload: err
        })
    }

}

// Add techs

export const addTechs=(tech)=>async dispatch=>{
    try {

         const res=await axios('/techs',{ 
             method:'POST',
            data: tech, 
            headers:{
                'Content-Type': 'application/json'
            }
           });
         const techs= res.data;
        //  console.log(logs)
                    dispatch({
                        type:ADD_TECH,
                        payload:techs
                    })
       
        
    } catch (err) {
        dispatch({
            type:TECHS_ERROR,
            payload: err
        })
    }
    
}

// delete techs

export const deleteTechs=(id)=>async dispatch=>{
    try {
         await axios.delete(`/techs/${id}`)
       
                    dispatch({
                        type:DELETE_TECH,
                        payload:id
                    })
      
        
    } catch (err) {
        dispatch({
            type:TECHS_ERROR,
            payload: err
        })
    }

}
//Set loading
export const setLoding=()=>{
    return {
        type: SET_LOADING
    }
}
