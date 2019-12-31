import React,{useState} from 'react';
import {useContext} from 'react';
import GithubContext from './context/github/githubContext';

const  SearchBar =()=>{
    const context = useContext(GithubContext);
    console.log('from searchbar',context)
    const [text,setText] = useState('');
    const onChange =(e)=>{
      console.log(e.target.value);
      setText(e.target.value)
    }
    return(
       <div>
            <input   onChange={onChange} name="text" className="SearchBar" type="text" placeholder="Enter name for search" />
            <button  onClick={()=> context.searchUsers(text)}className="btn btn-primary btn-block">Search</button>
        </div>
     )
    


} 

export default SearchBar;