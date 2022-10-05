import { IconName } from "react-icons/fa";
import React from 'react';
import { NavLink } from "react-router-dom";
import './Navbar.css';


const Footer = () => {
    return(
        <>
            <div className='footer'>
                <div className='footer-content'>
                <h3>Snowdin</h3>
                <ul className='socials'>
                    <li>
                        <NavLink href='#'><i className="BsFacebook"></i></NavLink>
                    </li>
                    <li>
                        <NavLink href='#'><i className="AiFillTwitterCircle"></i></NavLink>
                    </li>
                    <li>
                        <NavLink href='#'><i className="RiInstagramFill"></i></NavLink>
                    </li>
                    <li>
                        <NavLink href='#'><i className="IoLogoWhatsapp"></i></NavLink>
                    </li>
                </ul>
                <div className='footer-bottom'>
                    <p>copyright &copy;2022 SnowCompany. designed by <span>Snow</span></p>
                </div>
                </div>
            </div>
        </>
    )
}

export default Footer;