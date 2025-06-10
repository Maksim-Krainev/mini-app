import React from 'react'

export default function MoneyBar({ money, moneyImg }) {
	return (
		<div className='money'>
			<span className='money-count'>{money}₽</span>
			<img src={moneyImg} alt='money' className='money-icon' />
		</div>
	)
}
