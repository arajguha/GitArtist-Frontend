import React, { Component } from 'react'
import classes from './ProjectWindow.module.css'

class ProjectWindow extends Component {
    render() {
        return (
            <div className={classes.ProjectWindow}>
                <h3>{this.props.match.params.name}</h3>
                <p>Details on the project goes here</p>
            </div>
        )
    }
}

export default ProjectWindow