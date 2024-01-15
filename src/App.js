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
			<img src={Full} alt='' className='background' />

			<img src={Fiora} alt='' className='dog' />

			<img src={Fiorkathedoggo} alt='' className='title' />

			<img src={Mountains} alt='' className='mountains' />
</header>

<Text />
		</div>

	)
}

export default App
