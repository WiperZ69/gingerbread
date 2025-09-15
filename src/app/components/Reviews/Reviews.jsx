'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import PopupReview from '../popupReview/PopupReview'
import styles from './Reviews.module.scss'

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: { staggerChildren: 0.3 },
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

export default function Reviews() {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<section id='reviews' className={styles.reviews}>
			<motion.h2
				className={styles.title}
				initial={{ opacity: 0, y: -30 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, ease: 'easeOut' }}
				viewport={{ once: true }}
			>
				Пряничные мнения
			</motion.h2>

			<motion.div
				className={styles.reviews__container}
				variants={containerVariants}
				initial='hidden'
				whileInView='visible'
				viewport={{ once: true }}
			>
				<motion.div className={styles.review} variants={itemVariants}>
					<h5 className={styles.text}>
						Заказывала прянички маленькому проказнику на 2-летие и на Новый год.
						Очень красивые, ароматные, вкусные. Даже муж оценил, а он у меня
						привереда еще тот:) теперь только к Даше за вкусными пряничками к
						праздникам!
					</h5>
					<div className={styles.review__bottom}>
						<Image alt='Отзыв' src={'/review1.png'} width={100} height={87} />
						<p className={styles.name}>Жанна</p>
					</div>
				</motion.div>

				<motion.div className={styles.review} variants={itemVariants}>
					<h5 className={styles.txt}>
						Поделитесь вашим вкусным мнением! Нам очень важно знать ваше мнение
					</h5>
					<div className={styles.review__center}>
						<motion.button
							onClick={() => setIsOpen(true)}
							className={styles.button}
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
						>
							Написать
						</motion.button>
						<PopupReview isOpen={isOpen} onClose={() => setIsOpen(false)} />
						<div className={styles.review__bottom}>
							<Image alt='Отзыв' src={'/review.svg'} width={100} height={100} />
							<p className={styles.revTxt}>Ваш отзыв</p>
						</div>
					</div>
				</motion.div>

				<motion.div className={styles.review} variants={itemVariants}>
					<h5 className={styles.text}>
						Прекрасная работа! Очень вкусные, нежные - не оторваться и как
						аппетитно выглядят прянички! Идеальный подарок на любой случай и
						возраст! Спасибо большое за оригинальные вкусняшки
					</h5>
					<div className={styles.review__bottom}>
						<Image alt='Отзыв' src={'/review2.png'} width={100} height={76} />
						<p className={styles.name}>Варвара</p>
					</div>
				</motion.div>
			</motion.div>
		</section>
	)
}
