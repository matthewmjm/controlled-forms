import React from 'react'


export default function MovieCard(props){
    return (
        <li>
            <h2>{props.name}</h2>
            <img src={props.image}></img>
        </li>
    )
}

//destructuring
// export default function MovieCard({name, image}){
//     return (
//         <li>
//             <h2>{name}</h2>
//             <img src={image}></img>
//         </li>
//     )
// }