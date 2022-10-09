import './Navbar.css'
import { SiFacebook } from "react-icons/si";
import { BsInstagram } from "react-icons/bs";
import { FiTwitter } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs"

const formu = () => {
    return(
        <>
        <div className='footer-letters'>
        <h4>Contact us</h4>
            <div className='Iconss'>
                <li><SiFacebook size='2em'/></li>
                <li><BsInstagram size='2em'/></li>
                <li><FiTwitter size='2em' /></li>
                <li><BsWhatsapp size='2em' /></li>
            </div>
            <p>We are grateful that you are looking for and investing in this sporting goods retail venture. I hope what we have is what you are looking for.</p>
        </div>
        </>
    )
}

export default formu