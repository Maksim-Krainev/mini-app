import { useState } from 'react'
import './App.css'

import newUser from './assets/new-user.png'
import chargesIcon from './assets/0_mixed-dbe1c698.png'
import moneyIcon from './assets/5-0da41111.png'

import { Building2, Home, ClipboardList, DollarSign } from 'lucide-react'

// Тестові квести
const QUESTS = [
	{
		id: 1,
		title: 'Сделай 10 тапов',
		desc: 'Тапни по персонажу 10 раз',
		progress: 7,
		goal: 10,
		reward: '+5 руб',
		completed: false,
	},
	{
		id: 2,
		title: 'Заработай 1000 монет',
		desc: 'Насобирай 1000 монет любым способом',
		progress: 32,
		goal: 1000,
		reward: '+ 500 руб',
		completed: false,
	},
	{
		id: 3,
		title: 'Первый квест',
		desc: 'Выполни свой первый квест',
		progress: 1,
		goal: 1,
		reward: '+3 заряда',
		completed: true,
	},
]

export default function App() {
	const [taps, setTaps] = useState(0)
	const [page, setPage] = useState('main')

	const handleTap = () => setTaps(prev => prev + 1)

	return (
		<div className='app'>
			{/* ─── HUD (Top Bar) ──────────────────────────────── */}
			<header className='top-bar'>
				<div className='hud-item charges'>
					<img src={chargesIcon} alt='Charges' />
					<span>3</span>
				</div>
				<div className='hud-item money'>
					<img src={moneyIcon} alt='Money' />
					<span>{taps}</span>
				</div>
			</header>

			{/* ─── Main or Quests ────────────────────────────── */}
			<main className='tap-zone'>
				{page === 'main' && (
					<button className='tap-button' onClick={handleTap}>
						<img src={newUser} alt='Tap target' className='tap-target' />
					</button>
				)}
				{page === 'quests' && (
					<div className='quests-list'>
						{QUESTS.map(q => (
							<div
								className={`quest-card ${q.completed ? 'completed' : ''}`}
								key={q.id}
							>
								<div className='quest-header'>
									<h3>{q.title}</h3>
									<span className='reward'>{q.reward}</span>
								</div>
								<p>{q.desc}</p>
								<div className='quest-progress'>
									<div className='progress-bar'>
										<div
											className='progress-fill'
											style={{
												width: `${Math.min(100, (100 * q.progress) / q.goal)}%`,
											}}
										/>
									</div>
									<span className='progress-text'>
										{Math.min(q.progress, q.goal)} / {q.goal}
									</span>
								</div>
								<button className='quest-btn' disabled={!q.completed}>
									{q.completed ? 'Отримати нагороду' : 'Виконати'}
								</button>
							</div>
						))}
					</div>
				)}
			</main>

			{/* ─── Bottom Navigation ──────────────────────────── */}
			<nav className='bottom-nav'>
				<ul className='nav-list'>
					<li onClick={() => setPage('biz')}>
						<Building2 />
						<span>Бизнес</span>
					</li>
					<li
						className={page === 'main' ? 'active' : ''}
						onClick={() => setPage('main')}
					>
						<Home />
						<span>Главная</span>
					</li>
					<li
						className={page === 'quests' ? 'active' : ''}
						onClick={() => setPage('quests')}
					>
						<ClipboardList />
						<span>Квесты</span>
					</li>
					<li onClick={() => setPage('donate')}>
						<DollarSign />
						<span>Донат</span>
					</li>
				</ul>
			</nav>
		</div>
	)
}
