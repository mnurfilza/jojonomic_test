import React,{useState,useEffect} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


function Search() {
  const [input, setInput] = useState({});
  
 
  function searchHandle(e) { 
    console.log(input)
    fetch(`http://www.omdbapi.com/?apikey=2dfe16a6&s=${input}`,{
      method:"GET",
    }).then(res=>{
      return res.json()
    }).then(response => {
      console.log(response.Search)
    })
   }

   
  return (
    <div>
      <TextField  onChange={e => setInput(e.target.value)} id="filled-search" label="Search field"  margin="normal" type="search" variant="filled" />
      <Button variant="contained" onClick={searchHandle} color="primary">
        Search
      </Button>
    </div>
  );
}


export default Search;
