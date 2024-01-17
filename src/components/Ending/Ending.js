import React, { useRef } from 'react'
import { useInView } from 'framer-motion'
import Fiorella3 from '../../images/Fiorella3.png'

import './Ending.css'

const Ending = () => {
	const ref = useRef(null)
	const isInView = useInView(ref, { once: true })

	return (
		<section id='ending'>
			<div className='ending-container'>
				<h1
					ref={ref}
					style={{
						opacity: isInView ? 1 : 0,
						transition: 'all 0.5s linear 1s',
					}}>
					the end
				</h1>
				<img
					ref={ref}
					style={{
						opacity: isInView ? 1 : 0,
						transition: 'all 0.5s linear 1.5s',
					}}
					src={Fiorella3}
					className='ending-container__image'
				/>
			</div>
		</section>
	)
}

export default Ending
