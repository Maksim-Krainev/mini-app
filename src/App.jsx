import React, { useState } from 'react'
import './App.css'

import MainPage from './pages/MainPage'
import QuestsPage from './pages/QuestsPage'
import DonatePage from './pages/DonatePage'
import BottomMenu from './components/BottomMenu'
import ClothesPage from './pages/ClothesPage'
import TopPage from './pages/TopPage'

export default function App() {
	const [boosts, setBoosts] = useState(3)
	const [money, setMoney] = useState(1500)
	const [status, setStatus] = useState('Обычный')
	const [page, setPage] = useState('main')

	function handleTap() {
		setMoney(money + 1)
	}

	let PageComponent
	if (page === 'main') {
		PageComponent = (
			<MainPage
				boosts={boosts}
				money={money}
				status={status}
				handleTap={handleTap}
				setPage={setPage}
			/>
		)
	} else if (page === 'quests') {
		PageComponent = <QuestsPage />
	} else if (page === 'donate') {
		PageComponent = <DonatePage />
	} else if (page === 'clothes') {
		PageComponent = <ClothesPage onBack={() => setPage('main')} />
	} else if (page === 'top') {
		PageComponent = <TopPage onBack={() => setPage('main')} />
	}

	return (
		<div className='main-bg'>
			<div className='container'>
				{PageComponent}
				<BottomMenu active={page} onMenuClick={setPage} />
			</div>
		</div>
	)
}
