import React, { Component } from 'react';
import NewProject from './components/NewProject/NewProject'
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom'
import ProjectCards from './components/ProjectCards/ProjectCards'
import classes from './App.module.css'

class App extends Component {
  render() {
    return (
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
            <Route path="/new-project" component={NewProject} />
            <Route path="/home" render={() => <div>Home</div>}/>
            <Route path="/projects" component={ProjectCards} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
