import React from 'react'
import './NavBar.css'
import Toggle from '../Toggle/Toggle'
const NavBar = () => {
  return (
        <div className="n-wraper">
            <div className="n-left">
                <div className="n-name">NOURA</div>
                <Toggle/>
            </div>
            <div className="n-right">
                <div className='n-list'>
                    <ul>
                        <li>Home</li>
                        <li>Services</li>
                        <li>Experience</li>
                        <li>Portfolio</li>
                        <li>Testmonials</li>
                    </ul>
                </div>
                <button className="button n-button">
                    Contact 
                </button>
            </div>
        </div>
    )
}

export default NavBar