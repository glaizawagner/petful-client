import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HomePage extends Component {
    render() {
        return(
            <div className='home'>
                <h1> Welcome to Petful, an agency where you can adopt an animal.</h1>
                
                <h2> Adoption Process</h2>
                <p>Step 1: Press the link 'Adopt Now' or 'Start Adopting!' button below to enter to the adoption page </p>
                <p>Step 2: Select which details of the pet(s) you want to see.</p>
                <p>------> Review the people who are next in line to adopt.</p> 
                <p>Step 3: Click 'Add me to Queue' if you are interested to adopt.</p>
                <p>Step 4: It's a First Come First Serve! This not only works for people who want to adopt, but also in our animal list.</p>
                
                <Link to= '/adopt'>
                    <button type='button'>Start Adopting!</button>
                </Link>
                
            </div>
        )
    }
}

export default HomePage;