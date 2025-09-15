'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import styles from './FAQ.module.scss'

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: { staggerChildren: 0.25 },
	},
}

const cardVariants = {
	hidden: { opacity: 0, scale: 0.9, y: 30 },
	visible: {
		opacity: 1,
		scale: 1,
		y: 0,
		transition: { duration: 0.5, ease: 'easeOut' },
	},
}

function FlipCard({ front, back, bgClass }) {
	const [flipped, setFlipped] = useState(false)

	return (
		<motion.div
			className={`${styles.card} ${flipped ? styles.flipped : ''} ${bgClass}`}
			onClick={() => setFlipped(!flipped)}
			variants={cardVariants}
			whileHover={{ scale: 1.02 }}
		>
			<div className={styles.card__inner}>
				<div className={styles.card__front}>{front}</div>
				<div className={styles.card__back}>{back}</div>
			</div>
		</motion.div>
	)
}

export default function FAQ() {
	return (
		<section className={styles.faq}>
			<motion.h2
				className={styles.title}
				initial={{ opacity: 0, y: -20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				viewport={{ once: true }}
			>
				Любопытно? Отвечаем!
			</motion.h2>

			<motion.div
				className={styles.faq__container}
				variants={containerVariants}
				initial='hidden'
				whileInView='visible'
				viewport={{ once: true }}
			>
				<FlipCard
					bgClass={styles.bg1}
					front={
						<>
							<h5 className={styles.text}>Из чего сделаны ваши пряники?</h5>
							<Image
								className={styles.click}
								alt='Клик'
								src='/click.svg'
								width={48}
								height={45}
							/>
						</>
					}
					back={
						<>
							<h5 className={`${styles.text} ${styles.back}`}>
								Мы очень внимательно относимся к качеству наших пряников и не
								экономим на ингредиентах.Пряничная основа: мука пшеничная
								хлебопекарная высший сорт, масло сливочное высший сорт 82%,
								сахар, яйца куриные категории С0, специи: имбирь, кардамон,
								мускатный орех, корица, гвоздика.Глазурь: сахарная пудра, сухой
								яичный белок, ароматизатор ванилин, лимонная кислота,
								стабилизатор трагант, двуокись титана, и высококачественные
								пищевые красители
							</h5>
							<Image
								className={styles.click}
								alt='Клик'
								src='/click.svg'
								width={48}
								height={45}
							/>
						</>
					}
				/>

				<FlipCard
					bgClass={styles.bg2}
					front={
						<>
							<h5 className={styles.text}>Какой срок хранения?</h5>
							<Image
								className={styles.click}
								alt='Клик'
								src='/click.svg'
								width={48}
								height={45}
							/>
						</>
					}
					back={
						<>
							<h5 className={`${styles.text} ${styles.back}`}>
								Наши пряники хранятся 3 месяца.
							</h5>
							<Image
								className={styles.click}
								alt='Клик'
								src='/click.svg'
								width={48}
								height={45}
							/>
						</>
					}
				/>
				<FlipCard
					bgClass={styles.bg3}
					front={
						<>
							<h5 className={styles.txt}>Есть сертификат?</h5>
							<Image
								className={styles.click}
								alt='Клик'
								src='/click.svg'
								width={48}
								height={45}
							/>
						</>
					}
					back={
						<>
							<Image
								className={styles.doc}
								alt='Документ'
								src='/doc.png'
								width={312}
								height={190}
							/>
							<h5 className={`${styles.txt} ${styles.back}`}>
								Да, разумеется. Наши пряники имеют декларацию о соответствии
								техрегламенту Таможенного Союза и прошли испытания на
								соответствие ГОСТ 15810-2014.
							</h5>
							<Image
								className={styles.click}
								alt='Клик'
								src='/click.svg'
								width={48}
								height={45}
							/>
						</>
					}
				/>

				<FlipCard
					bgClass={styles.bg4}
					front={
						<>
							<h5 className={styles.text}>Есть доставка?</h5>
							<Image
								className={styles.click}
								alt='Клик'
								src='/click.svg'
								width={48}
								height={45}
							/>
						</>
					}
					back={
						<>
							<h5 className={`${styles.text} ${styles.back}`}>
								Да, привезем любой заказ курьером в черте Санкт-Петербурга.
								Отправим в любую точку России проверенной курьерской службой.
							</h5>
							<Image
								className={styles.click}
								alt='Клик'
								src='/click.svg'
								width={48}
								height={45}
							/>
						</>
					}
				/>

				<FlipCard
					bgClass={styles.bg5}
					front={
						<>
							<h5 className={styles.txt}>Есть скидки?</h5>
							<Image
								className={styles.click}
								alt='Клик'
								src='/click.svg'
								width={48}
								height={45}
							/>
						</>
					}
					back={
						<>
							<h5 className={`${styles.txt} ${styles.back}`}>
								Конечно есть! При оптовых заказах пряников мы предоставляем
								скидки в зависимости от объема и частоты заказов.
							</h5>
							<Image
								className={styles.click}
								alt='Клик'
								src='/click.svg'
								width={48}
								height={45}
							/>
						</>
					}
				/>

				<FlipCard
					bgClass={styles.bg6}
					front={
						<>
							<h5 className={styles.text}>Быстро сделаете?</h5>
							<Image
								className={styles.click}
								alt='Клик'
								src='/click.svg'
								width={48}
								height={45}
							/>
						</>
					}
					back={
						<>
							<h5 className={`${styles.text} ${styles.back}`}>
								Помните, что мы делаем пряники ручной работы очень тщательно,
								поэтому нам нужно 5-7 дней, чтобы изготовить небольшую партию
								пряников, и 10 дней, чтобы сделать и отправить партию 3000 штук.
							</h5>
							<Image
								className={styles.click}
								alt='Клик'
								src='/click.svg'
								width={48}
								height={45}
							/>
						</>
					}
				/>
			</motion.div>
		</section>
	)
}
