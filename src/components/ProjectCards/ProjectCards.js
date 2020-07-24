import React, { Component } from 'react'
import ProjectCard from './ProjectCard/ProjectCard'
import classes from './ProjectCards.module.css'
import axios from 'axios'

class ProjectCards extends Component{
    state = {
        loading: true,
        projects: [],
        err: false
    }

    componentDidMount() {
        axios.get('http://localhost:3001/gitArtist/fetch-projects')
            .then(res => {
                console.log(res.data)
                this.setState({
                    loading: false,
                    projects: res.data,
                    err: false
                })
            })
            .catch(err => {
                console.log(err)
                this.setState({
                    loading: false,
                    err: true
                })
            })
    }

    render(){
        //change the key later
        const projectCards = this.state.projects.map((project, index) => {
            return <ProjectCard key={index} title={project.name}/>
        })
        return (
            <div className={classes.ProjectCards}>
                {this.state.loading ? <div>...loading</div> : <div>{projectCards}</div>}
            </div>
        )    
    }
}

export default ProjectCards