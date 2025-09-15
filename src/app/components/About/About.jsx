'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import styles from './About.module.scss'

const fadeInUp = {
	hidden: { opacity: 0, y: 40 },
	show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
}

const fadeInLeft = {
	hidden: { opacity: 0, x: -60 },
	show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
}

const fadeInRight = {
	hidden: { opacity: 0, x: 60 },
	show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
}

export default function About() {
	return (
		<section id='about' className={styles.about}>
			<motion.h2
				className={styles.title}
				variants={fadeInUp}
				initial='hidden'
				whileInView='show'
				viewport={{ once: true, amount: 0.3 }}
			>
				О нас. Сладкое
				<br /> искусство с душой
			</motion.h2>

			<div className={styles.gallery}>
				<motion.div
					className={styles.part1}
					variants={fadeInLeft}
					initial='hidden'
					whileInView='show'
					viewport={{ once: true, amount: 0.3 }}
				>
					<Image alt='О нас' src={'/about1.png'} width={560} height={426} />
				</motion.div>

				<motion.div
					className={styles.part2}
					variants={fadeInRight}
					initial='hidden'
					whileInView='show'
					viewport={{ once: true, amount: 0.3 }}
				>
					<h4 className={styles.description}>
						Меня зовут Дарья Кондратьева.
						<br /> Я – основатель и главный художник кондитерской «Пряник Shop».
						С 2014 года мы создаём пряники, которые дарят не&nbsp;только вкус,
						но&nbsp;и&nbsp;настоящие эмоции.
					</h4>

					<h5 className={styles.italic}>
						«Наш секрет – в безупречном качестве росписи и&nbsp;внимании к
						каждой детали. Именно это помогло завоевать доверие наших клиентов»
					</h5>

					<h4 className={styles.description}>
						С 2014 года печём пряники по старинным рецептам вручную. Создаём
						уникальные пряники для любого повода с вашей символикой. Идеальный
						подарок партнёрам, который вы получите вовремя.
					</h4>
				</motion.div>
			</div>
		</section>
	)
}
