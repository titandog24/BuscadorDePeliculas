import './App.css';
import 'bulma/css/bulma.css'
import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Details from './pages/Details';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/detail/:id' element={<Details></Details>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;