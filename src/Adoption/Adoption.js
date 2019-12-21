import React, { Component } from 'react';
import './Adoption.css';

class Adoption extends Component {
    state = {
        selectedOption: null,
        cat: [],
        dog: [],
        userList: [],
        currentCat: null,
        currentDog: null,
        userInput: ''
    }

    setUserInput = (ev) => {
        this.setState({userInput: ev.target.userinput.value})
    }

    handleOptionChange = (ev) => {
        this.setState({
            selectedOption: ev.target.value
        })
    }

    handleAllUsers = (ev) => {
        this.setState({
            userList: this.props.allUsers
        })
    }

    handleNextCat = () => {
        this.setState({
            currentCat: this.state.petsData.firstCat
        })
        
    }

    handleJoin = (ev) => {
        ev.preventDefault();
        console.log('input' + ev.target.userinput.value)
        console.log('submitted' + this.state.userInput)
        // ev.preventDefault();
        let newUser = this.state.userInput;
        console.log('new user' + newUser)
        // ev.preventDefault();
        // let newUser = ev.target.value;
        // console.log('new user' + newUser)
        // this.setState({
        //     userName: newUser
        // })
        // this.props.joinQueue(newUser);
    }
    componentDidMount() {
        // console.log(this.props.petsData.firstCat)
        // console.log(this.props.petsData)
        this.setState ({
            cat: this.props.petsData.firstCat,
            dog: this.props.petsData.firstDog,
        })
       
    }

    renderCat() {
        // console.log('selected'+this.state.selectedOption)
        const selected = this.state.selectedOption;
        if(selected === 'Cat') {
            let catName = this.props.firstCat.name
            let imgCat = this.props.firstCat.imageURL;
            let imgDesc = this.props.firstCat.imageDescription;
            let gender = this.props.firstCat.sex;
            let age = this.props.firstCat.age;
            let breed = this.props.firstCat.breed;
            let story =  this.props.firstCat.story;
            return (
                <div>
                    <img src={imgCat} alt='cat'></img>
                    <span className='animal-desc'>“{imgDesc}“</span>
                    <div className='render-animals'>
                        <span>Name: <h3 className='animal-name'>{catName}</h3></span>
                        <p>Story: {story}</p>
                        <span>Gender: {gender}</span>
                        <span> | </span>
                        <span>Age: {age}</span>
                        <p>Breed: {breed}</p>
                    </div>
                </div>
            )
        }
    }

    renderDog() {
        const selected = this.state.selectedOption;
        if(selected === 'Dog') {
            let dogName = this.props.firstDog.name
            let imgDog = this.props.firstDog.imageURL;
            let imgDesc = this.props.firstDog.imageDescription;
            let gender = this.props.firstDog.sex;
            let age = this.props.firstDog.age;
            let breed = this.props.firstDog.breed;
            let story =  this.props.firstDog.story;
            return (
                <div>   
                    <img src={imgDog} alt='dog'></img>
                    <span className='animal-desc'>“{imgDesc}“</span>
                    <div className='render-animals'>
                        <span>Name: <h3 className='animal-name'>{dogName}</h3></span>
                        <p>Story: {story}</p>
                        <span>Gender: {gender}</span>
                        <span> | </span>
                        <span>Age: {age}</span>
                        <p>Breed: {breed}</p>
                    </div>
                </div>
            )
        }
    }

    renderBoth() {
        const selected = this.state.selectedOption;
        if(selected === 'Both') {
            let dogName = this.props.firstDog.name
            let imgDog = this.props.firstDog.imageURL;
            let dimgDesc = this.props.firstDog.imageDescription;
            let dgender = this.props.firstDog.sex;
            let dage = this.props.firstDog.age;
            let dbreed = this.props.firstDog.breed;
            let dstory =  this.props.firstDog.story;

            let catName = this.props.firstCat.name
            let imgCat = this.props.firstCat.imageURL;
            let imgDesc = this.props.firstCat.imageDescription;
            let gender = this.props.firstCat.sex;
            let age = this.props.firstCat.age;
            let breed = this.props.firstCat.breed;
            let story =  this.props.firstCat.story;

            return (
                    <div>
                        <img src={imgDog} alt='dog'></img>
                        <span className='animal-desc'>“{dimgDesc}“</span>
                        <div className='render-animals'>
                            <span>Name: <h3 className='animal-name'>{dogName}</h3></span>
                            <p>Story: {dstory}</p>
                            <span>Gender: {dgender}</span>
                            <span> | </span>
                            <span>Age: {dage}</span>
                            <p>Breed: {dbreed}</p>
                        </div>

                        <img src={imgCat} alt='cat'></img>
                        <span className='animal-desc'>“{imgDesc}“</span>
                        <div className='render-animals'>
                            <span>Name: <h3 className='animal-name'>{catName}</h3></span>
                            <p>Story: {story}</p>
                            <span>Gender: {gender}</span>
                            <span> | </span>
                            <span>Age: {age}</span>
                            <p>Breed: {breed}</p>
                        </div>
                       
                    </div>
                
            )
        }
    }

    renderAllUser() {
        let users = this.props.allUsers;
        let results='';
        // console.log('users : ' + this.props.allUsers);
        if(users !== []){
             users.map((uname, idx) => 
                results +=  + parseInt(idx+1) + '-' + uname.userName + '  '
                // console.log('Line ' + parseInt(idx + 1) + '-' + uname.userName)
            );
            // console.log('x'+results)
            // console.log('x'+x)
            return 'Next in Line : ' + results;
        }
    }

    render() {
        console.log('set input'+ this.state.userInput)
 
        return (
            <div className='adoption-page'>
                <fieldset>
                    <legend className='visually-hidden'></legend>
                       <div className='flex-container'>
                           <div >
                                 <span>INTERESTED IN: </span> 
                                 <input type='checkbox' value='Cat' checked={this.state.selectedOption ==='Cat'} onChange={this.handleOptionChange}/> Cat
                                 <input type='checkbox' value='Dog' checked={this.state.selectedOption ==='Dog'} onChange={this.handleOptionChange} /> Dog
                                 <input type='checkbox' value='Both' checked={this.state.selectedOption ==='Both'} onChange={this.handleOptionChange} /> Both
                            </div>
                            <div >
                                {/* <button type='button' onClick={this.handleAllUsers}>List in Queue</button> */}
                                <button type='submit' onSubmit={e => this.handleJoin(e)}>Add me to Queue</button>
                                <input type='text'  name='userinput' placeholder='Enter your name' required></input>
                            </div>
                        </div>
                </fieldset>

                <section className='users-list'> {this.renderAllUser()}</section>

                <div className='results'>
                    {this.renderCat()}
                    {this.renderDog()}
                    {this.renderBoth()}
                </div>
                
            </div>
        )
    }
}
export default Adoption;