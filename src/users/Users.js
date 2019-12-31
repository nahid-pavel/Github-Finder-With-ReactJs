import React from 'react';
import UserItem from './UserItem';

const Users = ({users,loading})=>{
    const style={
       
        display:'grid',
        gridTemplateColumns:'repeat(3,1fr)',
        gridGap:'1rem'
        
    }

    if(loading){
        return (
            <h1> Loading .....</h1>
        )
       

    }else{
       
    return(
       <div style={style}>
             {users.map(user=>(
              <UserItem user={user} />
            ))}

       </div>
          
        

     )
        
        
    }

    

   
   
}

export default Users;