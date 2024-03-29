import React, { useState } from 'react'
import './App.css'
import Story from './components/Story/Story.js'
import Hero from './components/HeroImage/Hero.js'
import Ending from './components/Ending/Ending.js'
import Footer from './components/Footer/Footer.js'
import Fiorella from './images/Fiorella.png'
import Fiorella2 from './images/Fiorella2.png'
import { GiWolfHowl, GiBat } from 'react-icons/gi'

function App() {
	const [shownextSection, setShownextSection] = useState(false)
	return (
		<div className='wrapper'>
			<Hero />
			<Story
				key='story1'
				text='Who is Fiorka? Is she a Doggo or is she a Wolfie?'
				buttonContent='show me that beast!'
				image={Fiorella}
				alt='Sitting dog'
				answer="It's hard to define... "
				icon={<GiWolfHowl />}
				onButtonClick={() => setShownextSection(true)}
			/>
			{shownextSection && (
				<Story
					key='story2'
					text='But there is one thing I am sure of:'
					buttonContent='i wanna know!'
					image={Fiorella2}
					alt='funny dog'
					answer='At night she flies with the bats! '
					icon={<GiBat />}
				/>
			)}
			{shownextSection && <Ending />}
			{shownextSection && <Footer />}
		</div>
	)
}

export default App
