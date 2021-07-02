import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <nav class="navbar navbar-dark bg-primary">
                <div className="row col-3 d-inline-flex justify-content-center text-white">
                    <span className="h3">Register</span>
                   <span><Link to="/"> Form</Link></span> 
                   <span><Link to="/detailes"> TableDetails</Link></span>
                </div>
            </nav>
        </div>
    )
}

export default Header
