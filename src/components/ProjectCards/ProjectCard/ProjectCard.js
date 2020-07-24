import React from 'react'
import classes from './ProjectCard.module.css'

const projectCard = props => {
    return (
        <div className={classes.ProjectCard}>
            <h3>{props.title}</h3>
        </div>
    )
}

export default projectCard