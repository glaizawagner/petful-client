import React, { Component } from 'react';

class SuccessInfo extends Component {
    render() {
        return(
            <div>
                {<img src={this.props.animal.imgUrl} alt={this.props.animal.imgDesc}/>}
                <p className='adoption-details'>{this.props.animal.animalName} was adopted by {this.props.animal.ownerName}</p>
            </div>
        )
    }
}

export default SuccessInfo;