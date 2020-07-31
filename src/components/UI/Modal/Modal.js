import React from 'react'
import { motion } from 'framer-motion'
import './Modal.css' 

const modal = props => {
    const clickHandler = (e) => {
        if(e.target.classList.contains("Backdrop")){
            props.modalCloseHandler('')
        }
    }
    return (
        <div className="Backdrop" onClick={clickHandler}>
            <motion.div 
                className="Modal"
                animate={{opacity: 1}}
            >
                {props.children}
            </motion.div>
        </div>
    )
}

export default modal