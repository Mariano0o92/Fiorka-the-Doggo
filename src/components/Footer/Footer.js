import React from 'react'
import { GiPaw } from "react-icons/gi";
import './Footer.css'

const Footer = () => {
	return (
		<footer>
			<div className='footer-text'>Fiorka The Doggo <GiPaw /> {new Date().getFullYear()}</div>
		</footer>
	)
}

export default Footer
