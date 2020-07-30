import React, { Component } from 'react';
import NewProject from './components/NewProject/NewProject'
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom'
import ProjectCards from './components/ProjectCards/ProjectCards'
import classes from './App.module.css'
import Modal from './components/UI/Modal/Modal'

class App extends Component {
  state = {
    modalDisplay: false,
    modalMessage: ''
  }

  modalToggle = (msg) => {
    this.setState(prevState => {
      return {
        modalDisplay: !prevState.modalDisplay,
        modalMessage: msg
      }
    })
  }

  render() {
    return (
      <>
        <BrowserRouter>
          <div className={classes.App}>
            <nav>
              <ul>
                <li>
                  <NavLink 
                    style={{textDecoration: 'none'}} 
                    activeStyle={{borderBottom: '5px solid black'}} 
                    to="/home"
                  >Home</NavLink>
                </li>
                <li>
                  <NavLink 
                    style={{textDecoration: 'none'}} 
                    activeStyle={{borderBottom: '5px solid black'}} 
                    to="/new-project"
                  >Create New Project</NavLink>
                </li>
                <li>
                  <NavLink 
                    style={{textDecoration: 'none'}} 
                    activeStyle={{borderBottom: '5px solid black'}} 
                    to="/projects"
                  >View Projects</NavLink>
                </li>
              </ul>
            </nav>
            <Switch>
              <Route path="/new-project" render={ () => <NewProject modalHandler={this.modalToggle} /> } />
              <Route path="/home" render={() => <div>Home</div>} />
              <Route path="/projects" component={ProjectCards} />
            </Switch>
          </div>
        </BrowserRouter>
        { this.state.modalDisplay 
          && <Modal modalCloseHandler={this.modalToggle}>
              {this.state.modalMessage}
            </Modal> }
      </>
    )
  }
}

export default App;
