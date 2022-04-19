import './App.css';
import Button from '@mui/material/Button';
import Navbar from './Components/navbar';
import InputBox from './Components/input_box';
import Card from './Components/Card';

function App() {
  return (
    <div className="App">
       <Navbar class="Navbar"/>
       <InputBox class="Input-box"/>
       {/* <Card character ={"I"} sequence={"1110100"} class="Card"/> */}
    </div>
  );
}
export default App;
