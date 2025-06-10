import React from 'react'

export default function StatusBlock({ statusIcon, status }) {
	return (
		<div className='status-block'>
			<img src={statusIcon} alt='status' className='status-icon' />
			<span className='status-text'>{status}</span>
		</div>
	)
}
