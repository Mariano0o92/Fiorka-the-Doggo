import React from 'react'
import './Hero.css'
import Fiora from '../../images/Fiora.png'
import Fiorkathedoggo from '../../images/Fiorkathedoggo.png'
import Full from '../../images/Full.png'
import Mountains from '../../images/Mountains.png'

const Hero = () => {
	return (
			<header>
				<img src={Full} alt='Sky full of stars' className='background' />

				<img src={Fiora} alt='black dog' className='dog' />

				<img src={Fiorkathedoggo} alt='Fiorka the Doggo title' className='title' />

				<img src={Mountains} alt='mountains at night' className='mountains' />
			</header>
	)
}

export default Hero
