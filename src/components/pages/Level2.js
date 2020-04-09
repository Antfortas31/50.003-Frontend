import React from 'react'
import Campus2 from './Campus Center Level 2.png';

function Level2() {
    
    return (
        <React.Fragment>
            <div>
                <img src={Campus2} style={pic} className="Floorplan" alt="floorplan"/>
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