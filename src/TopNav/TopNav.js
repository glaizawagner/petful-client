import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { faCat,faDog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './TopNav.css';

class TopNav extends Component {
    render() {
        return(
            <div className='nav'>

               <div className='logo'>
                    <FontAwesomeIcon icon={faCat} className='logo animals' /> 
                    <h1 className='logo-title'> FIFO Pet Adoption Agency </h1> 
                    <FontAwesomeIcon icon={faDog} className='logo animals'/> 
                    
               </div>
            
                {this.props.links.map((link, index) =>
                
                <div className='links' key={index} onClick={() => window.scrollTo(0, 0)}>
                    <Link to={link.to}
                        className={(link.to === this.props.curActive.pathname)
                        ? 'active' : ''}><div className='link1'>{link.name}</div>
                    </Link>
                </div>)}
            </div>
        );
    }
};

export default TopNav;