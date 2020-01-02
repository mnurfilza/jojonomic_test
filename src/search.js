import React,{useState,useEffect} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import './search.css';
import List from './List.js';


function Search() {
  const [input, setInput] = useState({});
  const [data, setData] = useState([])


  function searchHandle(e) {
    fetch(`http://www.omdbapi.com/?apikey=2dfe16a6&s=${input}`,{
      method:"GET",
    }).then(res=>{
      if (res.status !== 200) {
        throw Error(res.statusText)
      }
      return res.json()
    }).then(response => {
      setData(response.Search)
    }).catch((err) => {
      console.log(err)
    })
   }


  return (
    <div>
      <TextField  onChange={e => setInput(e.target.value)} id="filled-search" label="Search field"  margin="normal" type="search" variant="filled" />
      <Button variant="contained" onClick={searchHandle} color="primary">
        Search
      </Button>
      {data ? <List data={data}/> :
        <h2>
        Data Tidak Ditemukan
        </h2>
      }

    </div>
  );
}


export default Search;
