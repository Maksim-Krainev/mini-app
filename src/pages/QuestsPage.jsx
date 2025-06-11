import React from 'react'
import './questpage.css'

function getRandomQuest() {
	const quests = [
		{ title: 'Сделай 1000 клико', desc: 'Тапни по экрану 1000 раз' },
		{ title: 'Поднять 10000₽', desc: 'Накопи 10000₽' },
		{ title: 'Купи скин', desc: 'Купи любой скин в магазине' },
		{
			title: 'Проведи хорошо время',
			desc: 'Перейди по ссылке и посмотри видео',
		},
		{ title: 'Получи буст', desc: 'Активируй буст' },
	]
	return quests[Math.floor(Math.random() * quests.length)]
}

const questList = Array.from({ length: 7 }, (_, i) => {
	const q = getRandomQuest()
	return {
		...q,
		id: i + 1,
		completed: Math.random() > 0.5,
	}
})

export default function QuestsPage() {
	return (
		<div className='quests-page'>
			<h2 className='quests-title'>Квести</h2>
			<div className='quests-list'>
				{questList.map(q => (
					<div
						key={q.id}
						className={`quest-row${q.completed ? ' completed' : ''}`}
					>
						<span className='quest-title'>{q.title}</span>
						<span className='quest-desc'>{q.desc}</span>
						<span className='quest-status'>
							{q.completed ? 'Выполнено ✅' : 'Не выполнено'}
						</span>
					</div>
				))}
			</div>
		</div>
	)
}
