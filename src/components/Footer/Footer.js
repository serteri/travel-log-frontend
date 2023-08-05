import React from 'react';
import './footer.css'


export function Footer(){
    const date = new Date().getFullYear()
    return (
        <div className='footer'>
            <p className="date1">Copyright</p>
            <p className="date"> {date}</p>
        </div>


    )

}

// function to confirm jest working

// function addition (x,y){
//     return x + y
// }

// module.exports = { Footer }