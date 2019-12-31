import React,{Fragment,useEffect,useContext} from 'react';
import './App.css';
import Users from './users/Users';
import Navbar from './layouts/Navbar';
import SearchBar from './SearchBar';
import Alert from './Alert';
import GithubContext from './context/github/githubContext';

const  App =()=>{

const context = useContext(GithubContext);
useEffect(()=>  {
    context.getUsers();
     // eslint-disable-next-line
  },[])
return(
    <Fragment>
          <Navbar />
          <div className="container">
            {context.alert !==null && <Alert  />}
          <SearchBar />
          <Users   users={context.users} loading={context.loading} />    
          </div>
      </Fragment>
     
    )
    
}
export default App;
