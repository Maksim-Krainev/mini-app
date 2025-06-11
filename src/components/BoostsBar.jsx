import React from 'react'
import './booststar.css'

export default function BoostsBar({ boostImg, boosts }) {
	return (
		<div className='boosts'>
			<img src={boostImg} alt='boost' className='boost-icon' />
			<span className='boost-count'>{boosts}</span>
		</div>
	)
}
