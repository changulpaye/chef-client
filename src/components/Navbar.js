import React from 'react'
import './css/Navbar.css'

function Navbar() {
    return (
        <div className="navbar">
            <ul className="navbar-li">
                <li><a href="#demo">Demo</a></li>
                <li><a href="#recipes">Recipes</a></li>
                <li><a href="#signup">Signup</a></li>

            </ul>
        </div>
    )
}
export default Navbar