import React from 'react'
import './top.css'

function getRandomName() {
	const names = [
		'Міша',
		'Саша',
		'Кирило',
		'Вова',
		'Назар',
		'Олег',
		'Женя',
		'Денис',
		'Артем',
		'Максим',
		'Ярослав',
		'Давид',
		'Ілля',
		'Дмитро',
		'Ігор',
		'Антон',
	]
	return names[Math.floor(Math.random() * names.length)]
}

function getRandomScore() {
	return Math.floor(Math.random() * 10000) + 2000
}

const topList = Array.from({ length: 10 }, (_, i) => ({
	id: i + 1,
	name: getRandomName(),
	score: getRandomScore(),
})).sort((a, b) => b.score - a.score)

export default function TopPage({ onBack }) {
	return (
		<div className='top-page'>
			<h2 className='top-title'>ТОП 10</h2>
			<div className='top-list'>
				{topList.map((user, i) => (
					<div
						key={user.id}
						className={
							'top-row' +
							(i === 0
								? ' top-gold'
								: i === 1
								? ' top-silver'
								: i === 2
								? ' top-bronze'
								: '')
						}
					>
						<span className={`top-place${i < 3 ? ' top-place-top' : ''}`}>
							{i + 1}
						</span>
						<span
							className={`top-username${i === 0 ? ' top-username-gold' : ''}`}
						>
							{user.name}
						</span>
						<span className='top-score'>{user.score}</span>
					</div>
				))}
			</div>
			<button onClick={onBack} className='menu-btn'>
				Назад
			</button>
		</div>
	)
}
