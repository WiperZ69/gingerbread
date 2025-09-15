'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import PopupOrder from '../popupOrder/PopupOrder'
import styles from './Header.module.scss'

export default function Header() {
	const [isOpen, setIsOpen] = useState(false)

	const headerVariants = {
		hidden: { y: -50, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: { duration: 1.3, ease: 'easeOut' },
		},
	}

	return (
		<motion.header
			className={styles.header}
			variants={headerVariants}
			initial='hidden'
			animate='visible'
		>
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
		</motion.header>
	)
}
