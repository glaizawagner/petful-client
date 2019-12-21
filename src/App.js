import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './HomePage/HomePage';
import Adoption from './Adoption/Adoption';
import ApiService from './ApiService/ApiService';
import TopNav from './TopNav/TopNav';
import Success from './SuccessStories/SuccessStories'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        dog: [],
        cat: [],
        userList:[],
        success: [],
        currentUser: '',
        user: 'YOU',
        links: [{name: 'Home', to: '/'}, {name: 'Adopt now', to: '/adopt'}, {name: 'Success Stories', to: '/lists-adopted'}]
    }
  }
  

  setFirstCat = () => {
    ApiService.getCurrentCat()
    .then( res => {
          this.setState({
              cat: res
          })
    })
    .catch({error: 'An error has Occurred'})
  }

  setFirstDog = () => {
    ApiService.getCurrentDog()
    .then( res => {
          this.setState({
              dog: res
          })
    })
    .catch({error: 'An error has Occurred'})
  }

  setAllUsers = () => {
    ApiService.getAllUser()
        .then( res => {
                this.setState({
                    userList: res
                })
        })
        .catch({error: 'An error has Occurred'})
  }

  setAllAdoptedList = () => {
    ApiService.getAdoptedList()
      .then(res => {
        this.setState({
          success: res
        })
      })
      .catch({error: 'An error has Occurred'})
  }

  adoptCat = () => {
    ApiService.removeCat()
    .then( () => {
        this.setState({ 
          cat: this.state.cat.next ? this.state.cat.next : null,
          userList: this.state.userList.next ? this.state.userList.next : null
        })
    })
  }

  adoptDog = () => {
    ApiService.removeDog()
    .then( () => {
        this.setState({ 
          dog: this.state.dog.next ? this.state.dog.next : null,
          userList: this.state.userList.next ? this.state.userList.next : null
        })
    })
  }

  adoptBoth = () => {
    ApiService.removeCat()
    .then( () => {
        this.setState({ 
          cat: this.state.cat.next ? this.state.cat.next : null,
          userList: this.state.userList.next ? this.state.userList.next : null
        })
    })
    ApiService.removeDog()
    .then( () => {
        this.setState({ 
          dog: this.state.dog.next ? this.state.dog.next : null,
          userList: this.state.userList.next ? this.state.userList.next : null
        })
    })
  }

  joinQueue= (user) => {
    ApiService.addNewUser()
      .then(res => {
        this.setState({
          userList: res
        })
      })
  }

  handleAddUser=(user) => {
      this.setState({
        userList: [ ...this.state.userList, user]
      })
  }

  handleNextInLine = () =>{
    this.setState({
      userList: [...this.state.userList.slice(1)]
    })
    if(this.state.userList.length === 0){
      this.setAllUsers();
    }
  }

  componentDidMount() {
    this.setFirstCat()
    this.setFirstDog()
    this.setAllUsers()
    this.setAllAdoptedList()

    setInterval(this.setFirstCat, 15000);
    setInterval(this.setFirstDog, 15000);
    setInterval(this.handleNextInLine, 15000);
  }

  componentWillMount(){
    clearInterval();
  }


  render() {
    // console.log(this.state.currentUser);
    // console.log(this.state.dog);
    // console.log(this.state.success);
    return (
      <Router>
          <div className='App'>
              <Route render={(routeProps) => <TopNav curActive={routeProps.location} links={this.state.links}/>}/>
            <main>
              <Switch>
                  <Route path={'/adopt'} render={ () => {
                    return <Adoption
                              firstCat= {this.state.cat}
                              firstDog = {this.state.dog}
                              allUsers = {this.state.userList}
                              petsData = {this.state}
                              adoptCat={this.adoptCat}
                              adoptDog={this.adoptDog}
                              adoptBoth={this.adoptBoth}
                              handleAddUser={this.handleAddUser}
                              joinQueue={this.joinQueue}
                          />
                    }}/>
                  <Route path={'/lists-adopted'} render={ () => {
                    return <Success 
                              adoptedList = {this.state.success}     
                            />
                  }} />

                  <Route exact path={'/'} component={ () => <Home/>}/>
              </Switch>
            </main>

            <footer className='footer'>
                  Copyright © 2019 Glaiza Wagner & Wesley Jacobs
            </footer>
          </div> 
      </Router>
    )
  }
}
export default App;
