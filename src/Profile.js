import React from 'react';
import data from './data.json';

class Profile extends React.Component { 

    constructor() {
        super()
        this.state = {
            name: data.profile.basics1.name
        }
    }

    handleMouseLeave = ()=> {
        this.setState({
            name: data.profile.basics1.name
        })
    }

    handleMouseOver = ()=> {
        this.setState({
            name: "Hovering"
        })
    }
    render() {
        return (
            <h1 onMouseOver={this.handleMouseOver}
                onMouseLeave={this.handleMouseLeave}
            >
                {this.state.name}
            </h1>
        )
    }
}

export default Profile;