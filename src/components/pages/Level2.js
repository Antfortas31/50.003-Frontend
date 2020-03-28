import React from 'react'
import floorplan from './floorplan.png';

function Level2() {
    
    return (
        <React.Fragment>
            <h1>Level 2</h1>
            <div>
                <p style = {alignleft}>
                    This is the TodoList app v1.0.0.
                    It is part of a React crash course
                </p>
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

export default Level2;