import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './TopNav.css';

class TopNav extends Component {
    render() {
        return(
            <div className='nav'>
               <h1> FIFO Pet Adoption Agency </h1>
                {this.props.links.map((link, index) =>
                
                <div className='links' key={index} onClick={() => window.scrollTo(0, 0)}>
                    <Link to={link.to}
                        className={(link.to === this.props.curActive.pathname)
                        ? 'active' : ''}>{link.name}
                    </Link>
                </div>)}
            </div>
        );
    }
};

export default TopNav;