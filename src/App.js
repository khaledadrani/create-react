import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home'


const database = {notes:[{uid:0,content:"firts",title:"Note1"},
                  {uid:2,content:"second",title:"Note1"},
                  {uid:1,content:"third",title:"Note1"},
                  {uid:1,content:"third",title:"Note1"},
                  {uid:1,content:"third",title:"Note1"}]}

function App() {
  return (
    <div className="App">
      <Home database={database}/>
    </div>
  );
}



export default App;
