// import React from 'react';

export default function Navbar({setPage}){
    return <div className='nav'>
        <button onClick={e => setPage('Welcome')}>Welcome</button>
        <button onClick={e => setPage('Products')}>Products</button>
        <button onClick={e => setPage('Cart')}>Cart</button>
    </div> 

}