import React, { Component } from 'react';
import SuccessInfo from './SuccessInfo';
import './SuccessStories.css'

class SuccessStories extends Component {
    state = {
        success: null
    }

    setSuccess = () => {
        this.setState({
            success: this.props.adoptedList
        })
    }

    componentDidMount() {
        this.setSuccess();
    }

    renderSuccessInfo(){
        return this.state.success.map((animal, idx) => {
            return <SuccessInfo key={idx} animal={animal}/>
        })
    }

    render() {
        console.log(this.props.adoptedList);

        return (
            <div className='adopted-lists'>
                <h2 className='l-adopted'> Lists of adopted animals</h2>
                <div className='adopted-info'>
                    {this.state.success && this.renderSuccessInfo()}
                </div>
            </div>
        )
    }
}

export default SuccessStories;