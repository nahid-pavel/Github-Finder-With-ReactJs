import{
    GET_USERS,
    SET_LOADING,
    SET_ALERT,
    CLEAR_ALERT
} from '../types.js';

export default (state,action)=>{
  switch(action.type){
    case GET_USERS:
        return{
            ...state,
            users:action.payload,
            loading: false

        }
    case SET_LOADING:
        return{
            ...state,
            loading:true

        }
    case SET_ALERT:
        return{
          ...state,
         alert:action.payload
        }
    case CLEAR_ALERT:
            return{
              ...state,
             alert:null
          }

    default:
        return state;

    }
}