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
        {/* <h1 className='welcome-header'>Welcome to the Supermart!</h1> */}
    </div>
  )

}


export default App;
