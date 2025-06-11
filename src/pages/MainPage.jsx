import React from 'react'
import BoostsBar from '../components/BoostsBar'
import MoneyBar from '../components/MoneyBar'
import CharacterTap from '../components/CharacterTap'
import StatusBlock from '../components/StatusBlock'
import './mainpage.css'

import boostImg from '../assets/drinks/3.png'
import moneyImg from '../assets/47.png'
import characterImg from '../assets/skins/20.png'
import statusIcon from '../assets/vip/1.png'
import shortIcon from '../assets/gps/22.png'
import topIcon from '../assets/gps/31.png'

export default function MainPage({
	boosts,
	money,
	status,
	handleTap,
	setPage,
}) {
	return (
		<>
			<div className='top-bar'>
				<BoostsBar boostImg={boostImg} boosts={boosts} />
				<MoneyBar money={money} moneyImg={moneyImg} />
			</div>
			<div className='mainpage-menu-buttons'>
				<button
					className='menu-btn mainpage-menu-btn'
					onClick={() => setPage('clothes')}
				>
					<img src={shortIcon} alt='Шорты' className='mainpage-menu-icon' />
				</button>
				<button
					className='menu-btn mainpage-menu-btn'
					onClick={() => setPage('top')}
				>
					<img src={topIcon} alt='ТОП' className='mainpage-menu-icon' />
				</button>
			</div>
			<div className='center-content'>
				<CharacterTap characterImg={characterImg} onTap={handleTap} />
				<StatusBlock statusIcon={statusIcon} status={status} />
			</div>
		</>
	)
}
