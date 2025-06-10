import React from 'react'

export default function BoostsBar({ boostImg, boosts }) {
	return (
		<div className='boosts'>
			<img src={boostImg} alt='boost' className='boost-icon' />
			<span className='boost-count'>{boosts}</span>
		</div>
	)
}
