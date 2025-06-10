import React, { useRef, useState } from 'react'

export default function CharacterTap({ characterImg, onTap }) {
	const [pluses, setPluses] = useState([])
	const plusId = useRef(0)

	function handleClick(e) {
		const rect = e.currentTarget.getBoundingClientRect()
		const x = e.clientX - rect.left
		const y = e.clientY - rect.top
		setPluses(pluses => [...pluses, { id: plusId.current++, x, y }])
		onTap()
	}

	function handleAnimEnd(id) {
		setPluses(pluses => pluses.filter(p => p.id !== id))
	}

	return (
		<div
			className='tap-area'
			onClick={handleClick}
			style={{ position: 'relative' }}
		>
			<img src={characterImg} alt='character' className='character' />
			{pluses.map(plus => (
				<span
					key={plus.id}
					className='plus-one'
					style={{
						left: plus.x - 10,
						top: plus.y - 30,
					}}
					onAnimationEnd={() => handleAnimEnd(plus.id)}
				>
					+1
				</span>
			))}
		</div>
	)
}
