import React from 'react';


const UserItem = ({user})=>{

    let avatar_url=user.avatar_url;
    let login= user.login;
    let html_url = user.html_url;
    return(
         <div className="card text-center">
            <img src={avatar_url} alt="avatar" className="img-round" />
             <h3>{login}</h3>
             <a  href={html_url} className="btn btn-primary btn-sm">View Profile</a>

         </div>
           
         

    )
}

export default UserItem;