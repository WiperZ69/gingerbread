'use client'

import { motion } from 'framer-motion'
import styles from './Form.module.scss'

export default function Form() {
	const items = [
		{
			num: 1,
			title: 'Большой опыт',
			desc: 'С 2014 года создали более 150 000 авторских пряников. Опыт, вложенный в каждый.',
		},
		{
			num: 2,
			title: 'Ручная работа',
			desc: 'Идеальные пряники ручной работы. Рекомендуем заказ за 5–7 дней.',
		},
		{
			num: 3,
			title: 'Сертификат',
			desc: 'Вся наша продукция сертифицирована (ГОСТ и ТР ТС). Копии документов выдаём с каждым заказом.',
		},
		{
			num: 4,
			title: 'Любая форма оплаты',
			desc: 'Наличные / карта / оплата от юрлиц',
		},
	]

	const container = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
			},
		},
	}

	const itemAnim = {
		hidden: { opacity: 0, y: 30 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.5, ease: 'easeOut' },
		},
	}
	return (
		<section className={styles.contact}>
			<motion.h2
				className={styles.title}
				initial={{ opacity: 0, y: -20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				viewport={{ once: true }}
			>
				Какой пряник вы хотите?
			</motion.h2>
			<div className={styles.contact__container}>
				<motion.form
					className={styles.form}
					initial={{ opacity: 0, x: -50 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.7, ease: 'easeOut' }}
					viewport={{ once: true }}
				>
					<input type='text' placeholder='Имя' required />
					<input type='tel' placeholder='Телефон' required />
					<input type='email' placeholder='Почта' required />
					<div className={styles.form__row}>
						<select required>
							<option value=''>Категория пряника</option>
							<option value='logo'>Пряники с логотипом</option>
							<option value='valentine'>
								Пряники на День Святого Валентина
							</option>
							<option value='newyear'>Пряники на Новый год</option>
							<option value='men'>Пряники в подарок мужчинам</option>
							<option value='women'>Пряники в подарок женщинам</option>
						</select>
						<input type='number' placeholder='Количество' min='1' required />
					</div>

					<div className={styles.form__bottom}>
						<label className={styles.checkbox}>
							<input type='checkbox' />
							<span className={styles.checkbox__icon}></span>
							<span className={styles.spn}>
								я соглашаюсь
								<br /> с <a href='/'>политикой конфиденциальности</a>
							</span>
						</label>
						<button type='submit'>отправить</button>
					</div>
				</motion.form>

				<motion.div
					className={styles.right}
					variants={container}
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true }}
				>
					{items.map(item => (
						<motion.div
							key={item.num}
							className={styles.right__item}
							variants={itemAnim}
						>
							<div className={styles.right__number}>
								<svg
									width='24'
									height='3'
									viewBox='0 0 24 3'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<line
										y1='1.5'
										x2='24'
										y2='1.5'
										stroke='#F2B7C6'
										strokeWidth='3'
										strokeDasharray='2 2'
									/>
								</svg>
								<div className={styles.right__num}>{item.num}</div>
							</div>
							<div className={styles.right__info}>
								<h5 className={styles.right__title}>{item.title}</h5>
								<h6 className={styles.right__description}>{item.desc}</h6>
							</div>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	)
}
