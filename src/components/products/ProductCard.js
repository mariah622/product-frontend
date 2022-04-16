import React from 'react'

export default function ProductCard(props){
     console.log(props)
     return (
         <div>
             <h1>
                 {props.name}

             </h1>

         </div>
     )
}