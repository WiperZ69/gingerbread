'use client'

import { motion } from 'framer-motion'
import styles from './Hero.module.scss'

const container = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.3, // задержка между элементами
		},
	},
}

const item = {
	hidden: { opacity: 0, y: 30 },
	show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Hero() {
	return (
		<section className={styles.hero}>
			<motion.div
				className={styles.hero__wrapper}
				variants={container}
				initial='hidden'
				animate='show'
			>
				<motion.h1 className={styles.hero__title} variants={item}>
					Авторские&nbsp;пряники с&nbsp;росписью
				</motion.h1>

				<motion.p className={styles.hero__description} variants={item}>
					Уникальные сладкие подарки ручной работы в Санкт-Петербурге. Ярко.
					Вкусно. Необычно.
				</motion.p>

				<motion.a
					className={styles.hero__btn}
					href='#about'
					variants={item}
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
				>
					Узнать&nbsp;больше
				</motion.a>
			</motion.div>
		</section>
	)
}
