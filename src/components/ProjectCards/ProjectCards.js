import React, { Component } from 'react'
import ProjectCard from './ProjectCard/ProjectCard'
import classes from './ProjectCards.module.css'
import axios from 'axios'
import { Link, Route } from 'react-router-dom'
import ProjectWindow from '../ProjectCards/ProjectWindow/ProjectWindow'

class ProjectCards extends Component{
    state = {
        loading: true,
        projects: [],
        err: false,
        selected: false
    }

    componentDidMount() {
        axios.get('http://localhost:3001/gitArtist/fetch-projects')
            .then(res => {
                //console.log(res.data)
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
            return (
                <Link 
                    to={`${this.props.match.url}/${project.name.replace(/ /g, "-")}`} 
                    key={index}
                    style={{textDecoration: 'none', color: 'black'}}
                >
                    <ProjectCard title={project.name} />
                </Link>
            )
        })

        let projects
        if(this.state.err)
            projects = <div>Some error occured</div>
        else if(this.state.loading)
            projects = <div>...loading</div>
        else
            projects = <div>{projectCards}</div>

        return (
            <div className={classes.ProjectCards}>
                {projects}
                <br />
                <hr />
                <Route path={`${this.props.match.path}/:name`} component={ProjectWindow} />
            </div>
        )    
    }
}

export default ProjectCards