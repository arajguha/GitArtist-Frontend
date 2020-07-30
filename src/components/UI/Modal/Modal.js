import React from 'react'
import './Modal.css' 

const modal = props => {
    const clickHandler = (e) => {
        if(e.target.classList.contains("Backdrop")){
            console.log('backdrop clicked')
            props.modalCloseHandler('')
        }
    }
    return (
        <div className="Backdrop" onClick={clickHandler}>
            <div className="Modal">
                {props.children}
            </div>
        </div>
    )
}

export default modal