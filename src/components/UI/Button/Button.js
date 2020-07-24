import React from 'react'
import classes from './Button.module.css'

const button = props => {
    let btnType = props.buttonType === 'Danger' ? 'Danger' : 'Success'
    return (
        <button
            className={`${classes.CustomButton} ${classes[btnType]}`}
            onClick={props.clickHandler}
        >{props.label}</button>
    )
}

export default button