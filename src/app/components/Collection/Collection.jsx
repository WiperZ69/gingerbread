import classNames from 'classnames'
import styles from './Collection.module.scss'

export default function Collection() {
	return (
		<section id='collection' className={styles.collection}>
			<h2 className={styles.title}>Сладкая коллекция</h2>
			<div className={styles.collection__container}>
				<div className={classNames(styles.col, styles.colBig)}>
					<h4 className={styles.col__title}>Пряники на 23 февраля</h4>
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
				</div>
				<div className={classNames(styles.col, styles.colBig)}>
					<h4 className={styles.col__title}>
						Пряники на День святого Валентина
					</h4>
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
				</div>
				<div className={styles.col}>
					<h4 className={styles.col__title}>Пряники с вашим логотипом</h4>
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
				</div>
				<div className={styles.col}>
					<h4 className={styles.col__title}>Пряники на Новый год 2026</h4>
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
				</div>
				<div className={styles.col}>
					<h4 className={styles.col__title}>Пряники на 8 Марта</h4>
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
				</div>
			</div>
		</section>
	)
}
