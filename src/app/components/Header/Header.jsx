'use client'
import Image from 'next/image'
import { useState } from 'react'
import PopupOrder from '../popupOrder/PopupOrder'
import styles from './Header.module.scss'

export default function Header() {
	const [isOpen, setIsOpen] = useState(false)
	return (
		<header className={styles.header}>
			<div className={styles.logo}>
				<a href='/'>
					<Image
						alt='Логотип'
						src={'./logo.svg'}
						aria-label='Логотип'
						width={422}
						height={56}
					/>
				</a>
			</div>
			<nav className={styles.nav}>
				<a href='#about'>О&nbsp;нас</a>
				<a href='#collection'>Каталог</a>
				<a href='#reviews'>Отзывы</a>
				<a href='#footer'>Контакты</a>
			</nav>
			<button className={styles.btn} onClick={() => setIsOpen(true)}>
				Заказать
			</button>

			<PopupOrder isOpen={isOpen} onClose={() => setIsOpen(false)} />
		</header>
	)
}
