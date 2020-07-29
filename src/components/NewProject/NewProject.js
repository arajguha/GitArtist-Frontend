import React, { Component } from 'react'
import classes from './NewProject.module.css'
import Button from '../UI/Button/Button'
import axios from 'axios'
import AuxHoc from '../hoc/AuxHoc/AuxHoc'

//change to functional component or move it to containers folder later
class NewProject extends Component{
    state = {
        title: '',
        nameError: false
    }

    handleInputChange = (e) => {
        this.setState({ title: e.target.value })
    }

    submitHandler = (e) => {
        e.preventDefault()
        if(!this.state.title || this.state.title === ''){
            //alert('Enter valid Project name')
            this.setState({nameError: true})
        }
        else{
            this.setState({nameError: false})
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
            <AuxHoc>
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
                        {this.state.nameError ? 
                            <p style={{
                                color: 'red', 
                                fontWeight: 'bold'
                            }}>
                                Invalid Name
                            </p> : null
                        }
                    </form>
                </div>
            </AuxHoc>
        )
    }
}

export default NewProject