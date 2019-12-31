import React,{useContext} from 'react';
import GithubContext from './context/github/githubContext';

const Alert= ()=>{

    const context = useContext(GithubContext);
    console.log('context from alert',context);
    const { msg,type} = context.alert;

    let className = `alert alert-${type}`;

      return(

            <div className={className}>
                {msg}
            </div>
        )
    
    
   
    }

export default Alert;