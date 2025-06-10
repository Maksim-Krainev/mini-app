import React from 'react'
import BoostsBar from '../components/BoostsBar'
import MoneyBar from '../components/MoneyBar'
import CharacterTap from '../components/CharacterTap'
import StatusBlock from '../components/StatusBlock'

import boostImg from '../assets/drinks/3.png'
import moneyImg from '../assets/47.png'
import characterImg from '../assets/skins/20.png'
import statusIcon from '../assets/vip/1.png'



export default function MainPage({ boosts, money, status, handleTap, setPage }) {
	return (
		<>
			<div className='top-bar'>
				<BoostsBar boostImg={boostImg} boosts={boosts} />
				<MoneyBar money={money} moneyImg={moneyImg} />
			</div>
			<div className='center-content'>
				<CharacterTap characterImg={characterImg} onTap={handleTap} />
				<StatusBlock statusIcon={statusIcon} status={status} />
				<button
					className='menu-btn'
					style={{ marginTop: 16, width: 180, alignSelf: 'center' }}
					onClick={() => setPage('clothes')}
				>
					Одежда
				</button>
			</div>
		</>
	)
}
