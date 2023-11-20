export const getAllCakesReducer=(state={cakes :[]}, action)=>{

    switch(action.type)
    {
        case 'GET_CAKES_REQUEST': return{
            loading : true,
            ...state
        }
        case 'GET_CAKES_SUCCESS': return{
            loading : false,
            cakes : action.payload
        }
        case 'GET_CAKES_FAILED': return{
            error : action.payload,
            loading : false
        }
        default : return state
    }
}