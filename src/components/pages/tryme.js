import React from 'react'
import floorplan from './floorplan.png';

function tryme() {
    
    return (
        <React.Fragment>
            <h1>Try Me</h1>
            <div>
                <p style = {alignleft}>
                    try try only this page
                </p>
                <btn>
                    click me
                </btn>
                <img src={floorplan} style={pic} className="Floorplan" alt="floorplan"/>
            </div>
        </React.Fragment>
    )
}
const pic = {
    width: '800x',
    height: '500px',
    resizeMode: 'contain'
}

const alignleft = {
    background: '#0f100',
    color: '#ff',
    borderWidth: '5'
}
const alignright = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
}

export default tryme;