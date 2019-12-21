import React, { Component } from 'react';
import SucessInfo from './SuccessInfo';

class SucessStories extends Component {
    renderSucessInfo(){
        return <SucessInfo />
    }

    render() {
        return (
            <div>
                {this.renderSucessInfo()}
            </div>
        )
    }
}

export default SucessStories;