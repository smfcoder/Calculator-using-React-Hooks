import React from 'react'
import '../App.css'
import {Link} from 'react-router-dom'



function Nav(){

    const navEle ={
        color : 'black'
    }

    return(
        <nav>
            <Link style={navEle} to="/">
                <h3>SMFCODER</h3>
            </Link>
            <div className="nav-links" >
                <Link to="/profile" style={navEle}>
                    Profile
                </Link>
                <Link to="/counter" style={navEle}>
                    Counter
                </Link>
                <Link to="/jsxcounter" style={navEle}>
                    Inc/Dec Counter
                </Link>
                <Link to="/calculator" style={navEle}>
                    Calculator
                </Link>
            </div>
        </nav>
    );
}

export default Nav