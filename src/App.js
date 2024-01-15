import './App.css'
import Text from './components/Text.js'
import Fiora from './images/Fiora.png'
import Fiorkathedoggo from './images/Fiorkathedoggo.png'
import Full from './images/Full.png'
import Mountains from './images/Mountains.png'

function App() {
	return (
		<div className="wrapper">
<header>
			<img src={Full} alt='Sky full of stars' className='background' />

			<img src={Fiora} alt='black dog' className='dog' />

			<img src={Fiorkathedoggo} alt='Fiorka the Doggo title' className='title' />

			<img src={Mountains} alt='mountains at night' className='mountains' />
</header>

<Text />
		</div>

	)
}

export default App
