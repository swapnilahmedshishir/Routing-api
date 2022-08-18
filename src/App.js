import React from 'react';
import './App.css';
import Home from './Component/Home/Home';
import {Link,Routes,Route} from 'react-router-dom';
import NoMatch from './Component/NoMatch/NoMatch';
import FriendDetails from './Component/FriendsDeatalis/FriendDetails';
function App() {

  
  return (
    <Routes>
      <Route path='/home' element={<Home/>}></Route>
      <Route index path='/' element={<Home/>}></Route>
      <Route path='*' element={<NoMatch/>}></Route>
      <Route path='/friend/:friendDetails' element={<FriendDetails/>}></Route>
     
    </Routes>
  );
}

export default App;
