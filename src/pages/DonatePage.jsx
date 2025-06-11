import React from 'react'
import vipImg from '../assets/vip/3.png'
import vodkaImg from '../assets/drinks/3.png'
import './donate.css'

export default function DonatePage() {
	const starToRubleRateOld = 10 // старый курс
	const starToRubleRateNew = 6 // новый курс, выгодно!
	const rubleForStars = 1000 // Сколько рублей за обмен

	return (
		<div className='donate-page'>
			<h2 className='donate-title'>Магазин доната</h2>
			<div className='donate-list'>
				{/* Конвертация звёзд */}
				<div className='donate-card'>
					<div className='donate-card-title'>Обмен звёзд на рубли</div>
					<div className='donate-exchange-row'>
						{rubleForStars}₽ ={' '}
						<span className='donate-old-rate'>
							{starToRubleRateOld * (rubleForStars / 100)}★
						</span>
						<span className='donate-new-rate'>
							{starToRubleRateNew * (rubleForStars / 100)}★
						</span>
					</div>
					<button className='menu-btn'>Обменять</button>
				</div>
				{/* VIP */}
				<div className='donate-card donate-row'>
					<img src={vipImg} alt='VIP' className='donate-vip-img' />
					<div className='donate-card-col'>
						<div className='donate-vip-title'>VIP на месяц</div>
						<div className='donate-vip-bonus'>+ VIP значок, бонусы</div>
						<div className='donate-vip-price'>100★ / месяц</div>
					</div>
					<button className='menu-btn'>Купить</button>
				</div>
				{/* Водка */}
				<div className='donate-card donate-row'>
					<img src={vodkaImg} alt='Водка' className='donate-vodka-img' />
					<div className='donate-card-col'>
						<div className='donate-vodka-title'>Водка</div>
						<div className='donate-vodka-bonus'>Веселит персонажа 🍾</div>
						<div className='donate-vodka-price'>15★</div>
					</div>
					<button className='menu-btn'>Купить</button>
				</div>
			</div>
		</div>
	)
}
