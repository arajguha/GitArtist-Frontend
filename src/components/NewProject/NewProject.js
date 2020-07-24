import React, { Component } from 'react'
import classes from './NewProject.module.css'
import Button from '../UI/Button/Button'
import axios from 'axios'

//change to functional component
//class based created for debugging
class NewProject extends Component{
    state = {
        title: ''
    }

    handleInputChange = (e) => {
        this.setState({ title: e.target.value })
    }

    submitHandler = (e) => {
        e.preventDefault()
        if(!this.state.title || this.state.title === '')
            alert('Enter valid Project name')
        else{
            const projectName = this.state.title.trim()
            console.log(projectName)
            
            axios.post('http://localhost:3001/gitArtist/create-project', {
                name: projectName
            })
                .then(res => console.log(res))
                .catch(err => console.log(err))
            
        }
    }

    render(){
        return (
            <div className={classes.NewProject}>
                <h2>Create New Project</h2>
                <form>
                    <input 
                        type="text" 
                        id="projectTitle" 
                        placeholder="Project Name"
                        style={{margin: '20px'}}
                        value={this.state.title}
                        onChange={e => this.handleInputChange(e)}
                    /> 
                    <br/>
                    <Button
                        label="Create"
                        clickHandler={e => this.submitHandler(e)} 
                    />
                </form>
            </div>
        )
    }
}

export default NewProject