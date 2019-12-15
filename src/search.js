import React,{useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


function Search() {
  const [input, setInput] = useState({});
 
 
  function searchHandle(e) { 
    console.log(input)
   }

   function handleChange(e) {
    setInput(e.target.value)
   }
  
  return (
    <div>
      <TextField  onChange={handleChange} id="filled-search" label="Search field"  margin="normal" type="search" variant="filled" />
      <Button variant="contained" onClick={searchHandle} color="primary">
        Search
      </Button>
    </div>
  );
}


export default Search;
