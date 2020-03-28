import React, {Component} from 'react';

class DisplayBox extends Component{
    render(){
        const{value} = this.props;
        return(
            <div>
            <label htmlFor="text">
                {value || " test "}
            </label>
            </div>
        );
    }
}

export default DisplayBox;