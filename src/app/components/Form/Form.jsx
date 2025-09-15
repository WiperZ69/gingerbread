import styles from './Form.module.scss'

export default function Form() {
	return (
		<section className={styles.contact}>
			<h2 className={styles.title}>Какой пряник вы хотите?</h2>
			<div className={styles.contact__container}>
				<form className={styles.form}>
					<input type='text' placeholder='Имя' />
					<input type='tel' placeholder='Телефон' />
					<input type='email' placeholder='Почта' />

					<div className={styles.form__row}>
						<select>
							<option value=''>Категория пряника</option>
							<option value='classic'>Пряники с логотипом</option>
							<option value='holiday'>Пряники на День Святого Валентина</option>
							<option value='holiday'>Пряники на Новый год</option>
							<option value='holiday'>Пряники в подарок мужчинам</option>
							<option value='holiday'>Пряники в подарок женщинам</option>
						</select>
						<input type='number' placeholder='Количество' />
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
				</form>
				<div className={styles.right}>
					<div className={styles.right__item}>
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
							<div className={styles.right__num}>1</div>
						</div>
						<div className={styles.right__info}>
							<h5 className={styles.right__title}>Большой опыт</h5>
							<h6 className={styles.right__description}>
								С 2014 года создали более 150 000 авторских пряников. Опыт,
								вложенный в каждый.
							</h6>
						</div>
					</div>
					<div className={styles.right__item}>
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
							<div className={styles.right__num}>2</div>
						</div>
						<div className={styles.right__info}>
							<h5 className={styles.right__title}>Ручная работа</h5>
							<h6 className={styles.right__description}>
								Идеальные пряники ручной работы. Рекомендуем заказ за 5–7 дней.
							</h6>
						</div>
					</div>
					<div className={styles.right__item}>
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
							<div className={styles.right__num}>3</div>
						</div>
						<div className={styles.right__info}>
							<h5 className={styles.right__title}>Сертификат</h5>
							<h6 className={styles.right__description}>
								Вся наша продукция сертифицирована (ГОСТ и ТР ТС). Копии
								документов выдаём с каждым заказом.
							</h6>
						</div>
					</div>
					<div className={styles.right__item}>
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
							<div className={styles.right__num}>4</div>
						</div>
						<div className={styles.right__info}>
							<h5 className={styles.right__title}>Любая форма оплаты</h5>
							<h6 className={styles.right__description}>
								Наличные / карта / оплата от юрлиц
							</h6>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
