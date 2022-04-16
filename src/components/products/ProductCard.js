import React from 'react'

export default function ProductCard(props){
    console.log(props)
    
    return (
    <div>
        <li>
            {props.name}
        </li>

    </div>
    
    
    )
}