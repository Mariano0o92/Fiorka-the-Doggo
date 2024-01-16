import React, { useState } from 'react'
import './App.css'
import Text from './components/Story/Text.js'
import Hero from './components/HeroImage/Hero.js'
import Fiorella from './images/Fiorella.png'
import Fiorella2 from './images/Fiorella2.png'
import { GiWolfHowl, GiBat } from 'react-icons/gi'

function App() {
	const [showSecondText, setShowSecondText] = useState(false)
	return (
		<div className='wrapper'>
			<Hero />
			<Text
				text='Who is Fiorka? Is she a Doggo or is she a Wolfie?'
				buttonContent='show me that beast!'
				image={Fiorella}
				alt='Sitting dog'
				answer="It's hard to define... "
				icon={<GiWolfHowl />}
				onButtonClick={() => setShowSecondText(true)}
			/>
			{showSecondText && (
				<Text
					text='But there is one thing I am sure of:'
					buttonContent='i wanna know!'
					image={Fiorella2}
					alt='funny dog'
					answer='At night she flies with the bats! '
					icon={<GiBat />}
				/>
			)}
		</div>
	)
}

export default App
