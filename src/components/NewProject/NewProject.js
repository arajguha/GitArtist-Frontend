import React, { Component } from 'react'
import classes from './NewProject.module.css'
import Button from '../UI/Button/Button'
import axios from 'axios'
import AuxHoc from '../hoc/AuxHoc/AuxHoc'

//change to functional component or move it to containers folder later
class NewProject extends Component{
    state = {
        title: '',
        message: null,
        error: false
    }

    handleInputChange = (e) => {
        this.setState({ title: e.target.value })
    }

    submitHandler = (e) => {
        e.preventDefault()
        if(!this.state.title || this.state.title === '' || this.state.title.trim() === ''){
            //alert('Enter valid Project name')
            this.setState({
                error: true,
                message: 'Invalid Project Name'
            })
             ////
             this.props.modalHandler('Invalid Project Name')
             ////
        }
        else{
            this.setState({
                error: false,
                message: null
            })
            const projectName = this.state.title.trim()
            //console.log(projectName)
            
            axios.post('http://localhost:3001/gitArtist/create-project', {
                name: projectName
            })
                .then(res => {
                    console.log(res)
                    this.setState({
                        error: false,
                        message: 'Project Created'
                    })
                    ////
                    this.props.modalHandler('Project Created')
                    ////

                })
                .catch(err => {
                    console.log(err.response.status)
                    if(err.response.status === 422){
                        this.setState({
                            error: true,
                            message: 'Project already exists'
                        })
                        ////
                        this.props.modalHandler('Project already exists')
                        ////
                    }else{
                        this.setState({
                            error: true,
                            message: 'Some error occured. Please try again'
                        })
                        ////
                        this.props.modalHandler('Some error occured. Please try again')
                        ////
                    }
                    
                })
            
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

                    </form>
                </div>
            </AuxHoc>
        )
    }
}

export default NewProject