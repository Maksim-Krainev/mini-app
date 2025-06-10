import React, { useState } from 'react'
import './App.css'

import boostImg from './assets/drinks/3.png';
import moneyCount from './assets/47.png'
import characterImg from './assets/skins/20.png';
import statusIcon from './assets/vip/1.png';

export default function App() {
	const [boosts, setBoosts] = useState(3)
	const [money, setMoney] = useState(1500)
	const [status, setStatus] = useState('Обычный')

	function handleTap() {
		setMoney(money + 1)
	}

	return (
		<div className='main-bg'>
			<div className='container'>
				<div className='top-bar'>
					<div className='boosts'>
						<img src={boostImg} alt='boost' className='boost-icon' />
						<span className='boost-count'>{boosts}</span>
					</div>
					<div className='money'>
						<span className='money-count'>{money}₽</span>
						<img src={moneyCount} alt='money' className='money-icon' />
					</div>
				</div>

				<div className='center-content'>
					<div className='tap-area' onClick={handleTap}>
						<img src={characterImg} alt='character' className='character' />
					</div>
					<div className='status-block'>
						<img src={statusIcon} alt='status' className='status-icon' />
						<span className='status-text'>{status}</span>
					</div>
				</div>

				<nav className='bottom-menu'>
					<button className='menu-btn'>Прогулка</button>
					<button className='menu-btn'>Бизнес</button>
					<button className='menu-btn active'>Главная</button>
					<button className='menu-btn'>Квесты</button>
					<button className='menu-btn'>Донат</button>
				</nav>
			</div>
		</div>
	)
}
