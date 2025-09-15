import Image from 'next/image'
import styles from './About.module.scss'

export default function About() {
	return (
		<section id='about' className={styles.about}>
			<h2 className={styles.title}>
				О нас. Сладкое
				<br /> искусство с душой
			</h2>
			<div className={styles.gallery}>
				<div className={styles.part1}>
					<Image alt='О нас' src={'/about1.png'} width={560} height={426} />
				</div>
				<div className={styles.part2}>
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
				</div>
			</div>
		</section>
	)
}
