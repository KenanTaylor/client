import './App.css';

function App() {
    
   const {movieName,setMovieName} = useState('')
   const {review, setReveiw} = useState('')
   
  return (
    <div className="App"><h1> MOVIE review</h1>

      <div className='form'>
        <label>movieName</label>
        <input type="text" name='movieName'/>
        <label>review</label>
        <input type="text" name='review'/>

        <button>submit</button>
      </div>
    
</div>
  );
}

export default App;
