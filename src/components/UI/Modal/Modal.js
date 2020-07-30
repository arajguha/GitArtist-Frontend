import React from 'react'
import './Modal.css' 

const modal = props => {
    const clickHandler = (e) => {
        if(e.target.classList.contains("Backdrop")){
            console.log('backdrop clicked')
        }
    }
    return (
        <div className="Backdrop" onClick={clickHandler}>
            <div className="Modal">
                Modal Test
            </div>
        </div>
    )
}

export default modal