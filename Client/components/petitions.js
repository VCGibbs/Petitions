import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class Petitions extends React.Component {
    constructor() {
        super();
        this.state = {
            Allpetitions: []
            
        }

    }
    componentDidMount() {
        axios
        .get()
        .then(res => {

        })
    }
    render() {
        return (
            <div>
                <div className="homepage"> All Petitions</div>
                <ul>
                    
                </ul>
            </div>
        )
    }
}

export default Petitions;