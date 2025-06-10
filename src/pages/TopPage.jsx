import React from 'react'

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
		<div
			className='top-page'
			style={{
				display: 'flex',
				flexDirection: 'column',
				minHeight: '100vh',
				alignItems: 'center',
			}}
		>
			<h2 className='top-title' style={{ margin: '25px 0 20px 0' }}>
				ТОП 10
			</h2>
			<div
				className='top-list'
				style={{
					width: '100%',
					maxWidth: 340,
					display: 'flex',
					flexDirection: 'column',
					gap: 13,
					marginBottom: 24,
				}}
			>
				{topList.map((user, i) => (
					<div
						key={user.id}
						className='top-row'
						style={{
							display: 'flex',
							alignItems: 'center',
							padding: '13px 18px',
							borderRadius: 13,
							background: 'linear-gradient(90deg, #27345a 0%, #324163 100%)',
							boxShadow: i < 3 ? '0 2px 14px #f9c53635' : '0 2px 8px #20305919',
							border:
								i === 0
									? '2px solid #f5ca45'
									: i === 1
									? '2px solid #b6b6b6'
									: i === 2
									? '2px solid #e4873e'
									: '2px solid #27345a',
							fontWeight: i === 0 ? 700 : 500,
						}}
					>
						<span
							style={{
								width: 24,
								display: 'inline-block',
								textAlign: 'center',
								fontWeight: 800,
								fontSize: '1.18rem',
								color:
									i === 0
										? '#f5ca45'
										: i === 1
										? '#b6b6b6'
										: i === 2
										? '#e4873e'
										: '#b3bfe5',
							}}
						>
							{i + 1}
						</span>
						<span
							style={{
								flex: 1,
								marginLeft: 15,
								fontSize: '1.07rem',
								color: i === 0 ? '#fffbe0' : '#e7f1ff',
							}}
						>
							{user.name}
						</span>
						<span
							style={{
								fontWeight: 600,
								fontSize: '1.05rem',
								color: '#a3c9f6',
							}}
						>
							{user.score}
						</span>
					</div>
				))}
			</div>
			<button onClick={onBack} className='clothes-back-btn'>
				Назад
			</button>
		</div>
	)
}
