import React, { useState } from 'react'
import skin1 from '../assets/skins/13.png'
import skin2 from '../assets/skins/12.png'
import skin3 from '../assets/skins/11.png'
// Додай свої скіни сюди

const skins = [
	{ id: 1, name: 'Классика', img: skin1 },
	{ id: 2, name: 'Хайп', img: skin2 },
	{ id: 3, name: 'Бандит', img: skin3 },
]

export default function ClothesPage({ onBack }) {
	const [selected, setSelected] = useState(null)

	return (
		<div className='clothes-page'>
			<h2 className='clothes-title'>Выбери скин</h2>
			<div className='clothes-skins-list'>
				{skins.map(skin => (
					<div
						key={skin.id}
						className={`clothes-skin-item${
							selected === skin.id ? ' selected' : ''
						}`}
						onClick={() => setSelected(skin.id)}
					>
						<img src={skin.img} alt={skin.name} className='clothes-skin-img' />
						<div className='clothes-skin-name'>{skin.name}</div>
					</div>
				))}
			</div>
			<button onClick={onBack} className='menu-btn clothes-back-btn'>
				Назад
			</button>
		</div>
	)
}
