import React from 'react'
import classes from './Modal.module.css' 

const modal = props => {
    return (
        <div className={classes.Backdrop}>
            <div className={classes.modal}>
                Modal Test
            </div>
        </div>
    )
}

export default modal