import React from 'react'
import './bottommenu.css'

export default function BottomMenu({ active, onMenuClick }) {
	const buttons = [
		{ name: 'Главная', id: 'main' },
		{ name: 'Квесты', id: 'quests' },
		{ name: 'Донат', id: 'donate' },
	]

	return (
		<nav className='bottom-menu'>
			{buttons.map(btn => (
				<button
					key={btn.id}
					className={`menu-btn${active === btn.id ? ' active' : ''}`}
					onClick={() => onMenuClick(btn.id)}
				>
					{btn.name}
				</button>
			))}
		</nav>
	)
}
