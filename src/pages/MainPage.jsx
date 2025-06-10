import React from 'react'
import BoostsBar from '../components/BoostsBar'
import MoneyBar from '../components/MoneyBar'
import CharacterTap from '../components/CharacterTap'
import StatusBlock from '../components/StatusBlock'

import boostImg from '../assets/drinks/3.png'
import moneyImg from '../assets/47.png'
import characterImg from '../assets/skins/20.png'
import statusIcon from '../assets/vip/1.png'
import shortIcon from '../assets/gps/22.png'
import topIcon from '../assets/gps/31.png'



export default function MainPage({ boosts, money, status, handleTap, setPage }) {
	return (
		<>
			<div className='top-bar'>
				<BoostsBar boostImg={boostImg} boosts={boosts} />
				<MoneyBar money={money} moneyImg={moneyImg} />
			</div>
			<div
				style={{
					display: 'flex',
					gap: 18,
					marginTop: 16,
					justifyContent: 'center',
					width: '100%',
				}}
			>
				<button
					className='menu-btn'
					style={{
						alignSelf: 'center',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						width: 62,
						height: 62,
						padding: 0,
					}}
					onClick={() => setPage('clothes')}
				>
					<img src={shortIcon} alt='Шорты' style={{ width: 38, height: 38 }} />
				</button>
				<button
					className='menu-btn'
					style={{
						alignSelf: 'center',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						width: 62,
						height: 62,
						padding: 0,
					}}
					onClick={() => setPage('top')}
				>
					<img src={topIcon} alt='ТОП' style={{ width: 38, height: 38 }} />
				</button>
			</div>
			<div className='center-content'>
				<CharacterTap characterImg={characterImg} onTap={handleTap} />
				<StatusBlock statusIcon={statusIcon} status={status} />
			</div>
		</>
	)
}
