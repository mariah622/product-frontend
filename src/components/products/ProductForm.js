// import React from 'react'
import {useState} from 'react'

export default function ProductForm(){

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')

    function handleSubmit(e){
        e.preventDefault()
        console.log('adding product...')

    }


     
    return <form onSubmit={handleSubmit}>
        <input type='text' value={name} onChange={e => setName(e.target.value)} />
        <input type='text' value={description} onChange={e => setDescription(e.target.value)} />
        <input type='text' value={price} onChange={e => setPrice(e.target.value)} />
        <input type='submit'/>
        

    </form>
    
}