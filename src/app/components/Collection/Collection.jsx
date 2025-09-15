'use client'

import classNames from 'classnames'
import { motion } from 'framer-motion'
import styles from './Collection.module.scss'

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.2, // задержка между карточками
		},
	},
}

const itemVariants = {
	hidden: { opacity: 0, y: 40 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, ease: 'easeOut' },
	},
}

export default function Collection() {
	return (
		<section id='collection' className={styles.collection}>
			<motion.h2
				className={styles.title}
				initial={{ opacity: 0, y: -30 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, ease: 'easeOut' }}
				viewport={{ once: true }}
			>
				Сладкая коллекция
			</motion.h2>

			<motion.div
				className={styles.collection__container}
				variants={containerVariants}
				initial='hidden'
				whileInView='visible'
				viewport={{ once: true }}
			>
				{[
					'Пряники на 23 февраля',
					'Пряники на День святого Валентина',
					'Пряники с вашим логотипом',
					'Пряники на Новый год 2026',
					'Пряники на 8 Марта',
				].map((title, idx) => (
					<motion.div
						key={idx}
						className={classNames(
							styles.col,
							idx < 2 && styles.colBig // первые 2 — большие
						)}
						variants={itemVariants}
					>
						<h4 className={styles.col__title}>{title}</h4>
						<a className={styles.col__link}>
							подробнее{' '}
							<svg
								width='24'
								height='6'
								viewBox='0 0 24 6'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M24 3L19 0.113249V5.88675L24 3ZM0 3V3.5H19.5V3V2.5H0V3Z'
									fill='#F2F2F2'
								/>
							</svg>
						</a>
					</motion.div>
				))}
			</motion.div>
		</section>
	)
}
