import React from 'react'
//import { Link } from 'gatsby'

export default class Artist extends React.Component {
    onClick() {
        alert("Hello World!")
    }
    render () {
        return (
            <div>
                <h1>{this.props.band.Name}</h1>
                <p>Origin: {this.props.band.Origin}</p>
                <img src={this.props.band.Image} alt={this.props.band.Name} />
                <p>{this.props.band.Biography}</p>
                <button onClick={this.onClick}>Click me!</button>
            </div> 
        )
    }
}


/*
it looks like this without havin a class:
const Artist = ({ band }) => {

    return (
        <div>
            <h1>{band.Name}</h1>
            <p>Origin: {band.Origin}</p>
            <img src={band.Image} alt={band.Name} />
        </div>
    )
}

export default Artist
*/