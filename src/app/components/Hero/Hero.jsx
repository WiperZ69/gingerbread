import styles from './Hero.module.scss'

export default function Hero() {
	return (
		<section className={styles.hero}>
			<div className={styles.hero__wrapper}>
				<h1 className={styles.hero__title}>
					Авторские пряники с&nbsp;росписью
				</h1>
				<p className={styles.hero__description}>
					Уникальные сладкие подарки ручной работы в Санкт-Петербурге. Ярко.
					Вкусно. Необычно.
				</p>
				<a className={styles.hero__btn} href='#about'>
					Узнать&nbsp;больше
				</a>
			</div>
		</section>
	)
}
