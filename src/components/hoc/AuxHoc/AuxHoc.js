import React from 'react'
import classes from './AuxHoc.module.css'

const auxHoc = props => {
    return (
        <div className={classes.AuxHoc}>
            {props.children}
        </div>
    )
}
export default auxHoc