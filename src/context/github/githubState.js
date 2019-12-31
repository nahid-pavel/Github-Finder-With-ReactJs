import React,{useReducer} from 'react';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import axios from 'axios';
import{
    GET_USERS,
    SET_LOADING,
    SET_ALERT,
    CLEAR_ALERT
} from '../types.js';

let githubClientId;
let githubClientSecret;

if(process.env.NODE_ENV !== 'production'){
    githubClientId=process.env.REACT_APP_CLIEND_ID;
    githubClientSecret=process.env.REACT_APP_CLIEND_SECRET;
}else{
    githubClientId=process.env.GITHUB_CLIEND_ID;
    githubClientSecret=process.env.GITHUB_CLIEND_SECRET;
}

const GithubState=(props)=>{
    const initialState={
        users:[],
        loading:false,
        alert:null
    }

   const [state,dispatch] =useReducer(GithubReducer,initialState)

   const getUsers =async ()=>{
        setLoading()
        let response = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_CLIEND_ID}&client_secret=${process.env.REACT_APP_CLIEND_SECRET}`);
        dispatch({
            type: GET_USERS,
            payload: response.data
        })
   }

   const searchUsers=async (text)=>{
    if(text ===''){
        showAlert('please enter something','danger')
    }else{
        let response = await 
        axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_CLIEND_ID}&client_secret=${process.env.REACT_APP_CLIEND_SECRET}`);
        
        dispatch({
            type: GET_USERS,
            payload: response.data.items
        })

    }
     
   }
   const showAlert=(msg,type)=>{

    dispatch({
        type: SET_ALERT,
        payload:{msg,type}
    })
    setTimeout(()=>{
        dispatch({
            type: CLEAR_ALERT
        })
    },2000)
     
}



   const setLoading=()=>{
       dispatch({type: SET_LOADING})
   }

    return <GithubContext.Provider
      value={{
          users:state.users,
          loading:state.loading,
          getUsers,
          setLoading,
          searchUsers,
          showAlert,
          alert:state.alert

      }}
    >
      {props.children}
    </GithubContext.Provider>


}

export default GithubState;