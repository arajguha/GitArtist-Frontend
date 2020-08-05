import React from 'react'
import AuxHoc from '../../hoc/AuxHoc/AuxHoc'
import classes from './ProjectCard.module.css'

const projectCard = props => {
    return (
        <AuxHoc>
            <div className={classes.ProjectCard}>
                <h3>{props.title}</h3>
            </div>
        </AuxHoc>
    )
}

export default projectCard