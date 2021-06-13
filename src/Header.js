import React, { useState } from 'react'
import './Header.css'
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";

function Header() {
    const [name, setName] = useState("NanoGiants")
    return (
        <div className='header'>
            <Link to='/'>
                <div class="title__fc">
                Feedhub
                </div>
            </Link>

            <div className='header__right'>
                <Avatar/>
                <Link to='/login' style={{ textDecoration: 'none' }}>
                    <div className="header__option">
                        <span className="header__optionLineOne">Hello {name}</span>
                        <span className="header__optionLineTwo">Sign Out</span>
                    </div>
                </Link>




            </div>
        </div>
    )
}

export default Header
