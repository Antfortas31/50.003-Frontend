import React, { Component } from 'react'

export class AddTodo extends Component {
    state = {
        title: ''
    }

    // [e.target.name] allows for multiple inputs without the need to create many onChange
    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    // onSubmit
    onSubmit = (e) => {
        e.preventDefault();
        // This adds whatever is in the field
        this.props.addTodo(this.state.title);
        // Clears the field
        this.setState({title: ''});
    }


    render() {
        return (
            <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
                <input 
                    style = {{flex: '10', padding: '5px'}}
                    type="text" 
                    name="title" 
                    placeholder = "Add Todo ...." 
                    value={this.state.title}
                    onChange={this.onChange}
                />
                <input
                type = "submit"
                value = "Submit"
                className = "btn"
                style = {{flex: '1'}}
                />
            </form>
        )
    }
}

export default AddTodo
