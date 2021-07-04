import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav class="navbar navbar-dark bg-primary w-100">
                <div className="w-75 content row col-3 justify-content-around text-white">
                    <span className="h3">Register</span>
                   <span><Link to="/"> Form</Link></span> 
                   <span><Link to="/detailes"> TableDetails</Link></span>
                </div>
            </nav>
        </div>
    )
}

export default Header
