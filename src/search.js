import React,{useState,useEffect} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import './search.css'


function Search() {
  const [input, setInput] = useState({});
  const [data, setData] = useState([])
  
 
  function searchHandle(e) { 
    fetch(`http://www.omdbapi.com/?apikey=2dfe16a6&s=${input}`,{
      method:"GET",
    }).then(res=>{
      return res.json()
    }).then(response => {
      setData(response.Search)
    })
   }


   if (data.length !== 0) {
     var listSearch = (
       <div>
          {data.map((res, index)=>
            <div key={index}>
              {res.Title}
            </div>  
          )}
       </div>
     )
   }

   
   
  return (
    <div>
      <TextField  onChange={e => setInput(e.target.value)} id="filled-search" label="Search field"  margin="normal" type="search" variant="filled" />
      <Button variant="contained" onClick={searchHandle} color="primary">
        Search
      </Button>

    {listSearch}      
    </div>
  );
}


export default Search;
