import './App.css'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Text from './components/Text.js'

function App() {
	return (
		<Parallax pages={2} className='animation'>
			<ParallaxLayer offset={0} speed={0.2}>
				<div className='animationLayer' id='background'></div>
			</ParallaxLayer>
			<ParallaxLayer offset={0} speed={0.35}>
				<div className='animationLayer' id='dog'></div>
			</ParallaxLayer>
			<ParallaxLayer offset={0} speed={-0.3}>
				<div className='animationLayer' id='title'></div>
			</ParallaxLayer>
			<ParallaxLayer offset={0} speed={0.35}>
				<div className='animationLayer' id='mountains'></div>
			</ParallaxLayer>
			<ParallaxLayer offset={1} speed={0.35}>
				<Text />
			</ParallaxLayer>
		</Parallax>
	)
}

export default App
