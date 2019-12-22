import React, { Component } from 'react';
import './Adoption.css';

class Adoption extends Component {
    state = {
        selectedOption: null,
        cat: [],
        dog: [],
        userList: [],
        currUser: this.props.allUsers[0],
        inputUser: 'not you',
        // currentCat: null,
        // currentDog: null,
        userInput: ''
    }

    setUserInput = (ev) => {
        this.setState({ userInput: ev.target.userInput.value })
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


    handleJoin = (ev) => {
        ev.preventDefault();
        let newUser = {userName: ev.target.userInput.value};
        this.props.handleAddUser(newUser);
        this.setState({
            inputUser: newUser
        })
        ev.target.userInput.value = '';
    }
    componentDidMount() {
        this.setState({
            cat: this.props.petsData.firstCat,
            dog: this.props.petsData.firstDog,
        })

    }

    renderCat() {
        const selected = this.state.selectedOption;
        if (selected === 'Cat') {
            let catName = this.props.firstCat.name
            let imgCat = this.props.firstCat.imageURL;
            let imgDesc = this.props.firstCat.imageDescription;
            let gender = this.props.firstCat.sex;
            let age = this.props.firstCat.age;
            let breed = this.props.firstCat.breed;
            let story = this.props.firstCat.story;
            return (
                <div className='animal-details'>
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
        if (selected === 'Dog') {
            let dogName = this.props.firstDog.name
            let imgDog = this.props.firstDog.imageURL;
            let imgDesc = this.props.firstDog.imageDescription;
            let gender = this.props.firstDog.sex;
            let age = this.props.firstDog.age;
            let breed = this.props.firstDog.breed;
            let story = this.props.firstDog.story; 
            return (
                <div className='animal-details'>
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
        if (selected === 'Both') {
            let dogName = this.props.firstDog.name
            let imgDog = this.props.firstDog.imageURL;
            let dimgDesc = this.props.firstDog.imageDescription;
            let dgender = this.props.firstDog.sex;
            let dage = this.props.firstDog.age;
            let dbreed = this.props.firstDog.breed;
            let dstory = this.props.firstDog.story;

            let catName = this.props.firstCat.name
            let imgCat = this.props.firstCat.imageURL;
            let imgDesc = this.props.firstCat.imageDescription;
            let gender = this.props.firstCat.sex;
            let age = this.props.firstCat.age;
            let breed = this.props.firstCat.breed;
            let story = this.props.firstCat.story;

            return (
                <div className='animal-details'>
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
                    <div className='render-animals animals-details'>
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
        //console.log(users);
        return users.map(user => {
            if(!user){
                user = ' '
            } else {
               return <div class='username'>{user.userName}</div>
            }
     })
    }


    render() {

        return (
            <div className='adoption-page'>
                <fieldset>
                    <form onSubmit={this.handleJoin}>
                    <legend className='visually-hidden'></legend>
                    <div className='flex-container'>
                        <div >
                            <span>INTERESTED IN: </span>
                            <input type='checkbox' value='Cat' checked={this.state.selectedOption === 'Cat'} onChange={this.handleOptionChange} /> Cat
                                 <input type='checkbox' value='Dog' checked={this.state.selectedOption === 'Dog'} onChange={this.handleOptionChange} /> Dog
                                 <input type='checkbox' value='Both' checked={this.state.selectedOption === 'Both'} onChange={this.handleOptionChange} /> Both
                            </div>
                        <div >
                            {/* <button type='button' onClick={this.handleAllUsers}>List in Queue</button> */}
                            <button type='submit' className='btn-add'>Add me to the Queue</button>
                            <input type='text' name='userInput' className='userInput' placeholder='Enter your name' required></input>
                        </div>
                    </div>
                    </form>
                </fieldset>

                <section className='users-list'>
                    <div className='next'>Next in line:</div>
                     {this.renderAllUser()}
                     </section>

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