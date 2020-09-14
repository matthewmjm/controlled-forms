import React, { Component } from 'react'

class MovieForm extends Component{
    
    // const initialState = {
    //     name: "",
    //     image: ""
    // }

    state = {
        name: "",
        image: ""
    }

    // state = initialState

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addMovie(this.state)
        this.setState({
            name: "",
            image: ""

        })
        // this.setState(initialState)
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <h2>Add New Movie</h2>
                <label>Name</label>
                <input onChange={this.handleChange} type="text" name="name" value={this.state.name}></input>
                <label>Image</label>
                <input onChange={this.handleChange} type="text" name="image" value={this.state.image}></input>
                <button type="submit">Add Movie</button>
            </form>
        )
    }
}

export default MovieForm