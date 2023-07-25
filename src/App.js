import React, { useState, useEffect} from 'react';
import './App.css';
import Axios from 'axios'

function App() {
    
   const {movieName,setMovieName} = useState('');
   const {review, setReveiw} = useState('');

   const submitReview = () =>{
      Axios.post("http://localhost:3001/api/instert", {
        movieNam: movieName,
         movieReview: review,
        }).then(()=>{
          alert("succesful insert");
        });
   };
   
  return (
    <div className="App"><h1> MOVIE review</h1>

      <div className='form'>
        <label>movieName</label>
        <input type="text" name='movieName'onChange={(e)=>{
          setMovieName(e.target.value)
         }}/>
        <label>review</label>
        <input type="text" name='review'onChange={(e)=>{
          setReveiw(e.target.value)
         }}/>

        <button onClick={submitReview}>submit</button>
      </div>
    
</div>
  );
}

export default App;
