import React from 'react'
import {Link} from 'react-router-dom'; 

function Header() {
    return (
        <header style ={headerStyle}>
            <h1>Capstone Allocation</h1>
            <Link style={linkStyle} to="../../50.003-FrontEnd"> Level 1</Link> | 
            <Link style={linkStyle} to="/level2"> Level 2</Link> | 
            <Link style={linkStyle} to="/tryme"> Test</Link> |

        </header>
    )
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}

const linkStyle = {
    color: '#ffaf',
    textDecoration: 'none'
}

export default Header;
