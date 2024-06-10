
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Add from './components/Add';
import Delete from './components/Delete';
import Home from './components/Home';
import Search from './components/Search';
import View from './components/View';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/add' element={<Add/>}/>
      <Route path='/search' element={<Search/>}/>
      <Route path='/delete' element={<Delete/>}/>
      <Route path='/view' element={<View/>}/>
      </Routes></BrowserRouter>
  );
}

export default App;
