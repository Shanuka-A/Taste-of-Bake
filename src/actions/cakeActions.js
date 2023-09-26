import axios from "axios";
export const getAllCakes=()=>dispatch=>{

    dispatch({type:'GET_CAKES_REQUEST'})

    try{
        const response = axios.get('/api/getcakes')
        console.log(response);
        dispatch({type:'GET_CAKES_SUCCESS', payload :response.data})
    } catch(error){
        dispatch({type:'GET_CAKES_FAILED', payload: error})

    }


}