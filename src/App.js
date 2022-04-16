// import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Pages from './components/Pages';
import {  useState } from 'react'

function App(){
  const [page, setPage] = useState('Welcome')
  return (
    <div className="App">
      <Navbar setPage={setPage}/>
      <Pages page={page}/>
    </div>
  )

}


export default App;
