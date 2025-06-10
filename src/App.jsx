import { useState } from 'react'
import './App.css'

import newUser from './assets/new-user.png'
import chargesIcon from './assets/0_mixed-dbe1c698.png'
import moneyIcon from './assets/5-0da41111.png'

import { Building2, Home, ClipboardList, DollarSign } from 'lucide-react'

export default function App() {
	const [taps, setTaps] = useState(0)

	const handleTap = () => setTaps(prev => prev + 1)

	return (
		<div className='app'>
			{/* ─── HUD (Top Bar) ──────────────────────────────── */}
			<header className='top-bar'>
				<div className='hud-item charges'>
					<img src={chargesIcon} alt='Charges' />
					<span>3</span>
				</div>

				<div className='hud-item money'>
					<img src={moneyIcon} alt='Money' />
					<span>{taps}</span>
				</div>
			</header>

			{/* ─── Tap Zone ───────────────────────────────────── */}
			<main className='tap-zone'>
				<button className='tap-button' onClick={handleTap}>
					<img src={newUser} alt='Tap target' className='tap-target' />
				</button>
			</main>

			{/* ─── Bottom Navigation ──────────────────────────── */}
			<nav className='bottom-nav'>
				<ul className='nav-list'>
					<li>
						<Building2 />
						<span>Бизнес</span>
					</li>
					<li className='active'>
						<Home />
						<span>Главная</span>
					</li>
					<li>
						<ClipboardList />
						<span>Квесты</span>
					</li>
					<li>
						<DollarSign />
						<span>Донат</span>
					</li>
				</ul>
			</nav>
		</div>
	)
}
