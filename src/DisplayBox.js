import React, {Component} from 'react';

//REPLACE AND DELETE THIS ONCE THE DATA IS NO LONGER NEEDED IN MAIN PAGE.

class DisplayBox extends Component{
    render(){
        const{value} = this.props;
        return(
            <div>
            <label htmlFor="text">
                {value || " "}
            </label>
            </div>
        );
    }
}

export default DisplayBox;