import logo from './logo.svg';
import './App.css';
import View from './components/View';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Add from './components/Add';

function App() {
  return (
    <div className="App">
      <Navbar/>

      <Routes>
        <Route path='/' element={<View/>}/>
        <Route path='/add' element={<Add
        data={{id:'',name:'',brand:'',quantity:'',price:''}}method="post" />}/>
      </Routes>
      </div>
 
  );
}

export default App;

