'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import styles from './Footer.module.scss'

export default function Footer() {
	const container = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
			},
		},
	}

	const item = {
		hidden: { opacity: 0, y: 30 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.6, ease: 'easeOut' },
		},
	}

	return (
		<footer id='footer' className={styles.footer}>
			<motion.div
				initial={{ opacity: 0, y: -20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				viewport={{ once: true }}
			>
				<Image src={'/logo_footer.svg'} width={480} height={41} alt='Логотип' />
			</motion.div>

			<motion.div
				className={styles.footer__container}
				variants={container}
				initial='hidden'
				whileInView='visible'
				viewport={{ once: true }}
			>
				<motion.div className={styles.footer__about} variants={item}>
					<h5 className={styles.about__title}>О компании</h5>
					<p className={styles.about__text}>
						Пряники Shop: корпоративные пряники ручной работы с 2014 года.
						Индивидуальный дизайн, натуральные ингредиенты, работа с юрлицами.
						Сладкие подарки для ваших сотрудников, клиентов и партнеров.
					</p>
				</motion.div>

				<motion.div className={styles.faq} variants={item}>
					<p className={styles.faq__title}>
						Выберите удобный способ
						<br />– мы на связи!
					</p>
					<div className={styles.faq__phone}>
						<Image src={'/tel.svg'} width={32} height={32} alt='tel' />
						<a href='tel:+79213318131'>+7 (921) 331-81-31</a>
					</div>
					<div className={styles.faq__email}>
						<Image src={'/mail.svg'} width={32} height={32} alt='mail' />
						<a href='mailto:zakaz@pryanikishop.ru'>zakaz@pryanikishop.ru</a>
					</div>
					<motion.div
						className={styles.faq__social}
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true }}
						variants={container}
					>
						{['/wa.svg', '/map.svg', '/vk.svg', '/tg.svg'].map((src, idx) => (
							<motion.a
								key={idx}
								href='/'
								variants={item}
								whileHover={{ scale: 1.2 }}
								whileTap={{ scale: 0.95 }}
							>
								<Image src={src} width={32} height={32} alt='social' />
							</motion.a>
						))}
					</motion.div>
				</motion.div>

				<motion.nav className={styles.nav} variants={item}>
					<a href='#about'>О нас</a>
					<a href='#collection'>Каталог</a>
					<a href='#reviews'>Отзывы</a>
					<a href='#contacts'>Контакты</a>
				</motion.nav>
			</motion.div>
		</footer>
	)
}
