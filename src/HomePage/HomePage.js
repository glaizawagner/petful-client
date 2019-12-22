import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './HomePage.css'

class HomePage extends Component {
    render() {
        return(
            <div className='home'>
                <h1 className='title'> <span className='welcome'>Welcome to Petful</span> <span className='intro'>an agency where you can adopt an animal.</span></h1>
                
                <h2 className='adoption'> Adoption Process</h2>
                <div className='process'>
                    <p><span className='step'>Step 1:</span> Press the link 'Adopt Now' or 'Start Adopting!' button below to enter to the adoption page </p>
                    <p><span className='step'>Step 2:</span> Select which details of the pet(s) you want to see.</p>
                    <p className='review'>Review the people who are next in line to adopt.</p> 
                    <p><span className='step'>Step 3:</span> Click 'Add me to Queue' if you are interested to adopt.</p>
                    <p><span className='step'>Step 4:</span> It's a First Come First Serve! This not only works for people who want to adopt, but also in our animal list.</p>
                    <div class='happy'><FontAwesomeIcon icon={faPaw} className='paw'/> Happy Adopting <FontAwesomeIcon icon={faPaw} className='paw'/></div>
                    <Link to= '/adopt'>
                        <button type='button' className='btn-adopt'>Start Adopting!</button>
                    </Link>
                </div>
                
                
                
                
            </div>
        )
    }
}

export default HomePage;