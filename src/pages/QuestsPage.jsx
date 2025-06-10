import React from 'react'

function getRandomQuest() {
	const quests = [
		{ title: 'Сделай 1000 клико', desc: 'Тапни по экрану 1000 раз' },
		{ title: 'Поднять 10000₽', desc: 'Накопи 10000₽' },
		{ title: 'Купи скин', desc: 'Купи любой скин в магазине' },
		{ title: 'Проведи хорошо время', desc: 'Перейди по ссылке и посмотри видео' },
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

export default function QuestsPage({  }) {
	return (
		<div
			className='quests-page'
			style={{
				display: 'flex',
				flexDirection: 'column',
				minHeight: '100vh',
				alignItems: 'center',
			}}
		>
			<h2 className='quests-title' style={{ margin: '24px 0 18px 0' }}>
				Квести
			</h2>
			<div
				className='quests-list'
				style={{
					width: '100%',
					maxWidth: 350,
					display: 'flex',
					flexDirection: 'column',
					gap: 15,
					marginBottom: 10,
				}}
			>
				{questList.map(q => (
					<div
						key={q.id}
						className={`quest-row${q.completed ? ' completed' : ''}`}
						style={{
							display: 'flex',
							flexDirection: 'column',
							borderRadius: 12,
							background: 'linear-gradient(90deg, #26395a 0%, #233654 100%)',
							boxShadow: q.completed
								? '0 1px 10px #54d46e33'
								: '0 1px 8px #20305913',
							padding: '14px 16px',
							border: q.completed ? '2px solid #59e87788' : '2px solid #283e64',
							opacity: q.completed ? 0.85 : 1,
						}}
					>
						<span
							style={{
								fontWeight: 700,
								fontSize: '1.08rem',
								color: q.completed ? '#59e877' : '#eaf1fa',
							}}
						>
							{q.title}
						</span>
						<span
							style={{
								marginTop: 4,
								fontSize: '0.97rem',
								color: '#b4c6db',
							}}
						>
							{q.desc}
						</span>
						<span
							style={{
								marginTop: 8,
								fontSize: '0.96rem',
								color: q.completed ? '#59e877' : '#6c768b',
								fontWeight: 600,
								letterSpacing: '0.05em',
							}}
						>
							{q.completed ? 'Выполнено ✅' : 'Не выполнено'}
						</span>
					</div>
				))}
			</div>
		</div>
	)
}
