import React from 'react'
import classes from './Modal.module.css'
import Backdrop from '../Backdrop/Backdrop'
import AuxHoc from '../../hoc/AuxHoc/AuxHoc'

const modal = props => {
    return (
        <AuxHoc>
            <div 
                className={classes.Modal} 
                style={{
                    transform : props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.show ? 1 : 0
                }}
            >{props.children}</div>
            <Backdrop show={props.show} />
        </AuxHoc>
    )
}
export default modal