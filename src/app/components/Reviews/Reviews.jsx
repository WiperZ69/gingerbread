'use client'

import Image from 'next/image'
import { useState } from 'react'
import PopupReview from '../popupReview/PopupReview'
import styles from './Reviews.module.scss'

export default function Reviews() {
	const [isOpen, setIsOpen] = useState(false)
	return (
		<section id='reviews' className={styles.reviews}>
			<h2 className={styles.title}>Пряничные мнения</h2>
			<div className={styles.reviews__container}>
				<div className={styles.review}>
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
				</div>
				<div className={styles.review}>
					<h5 className={styles.txt}>
						Поделитесь вашим вкусным мнением! Нам очень важно знать ваше мнение
					</h5>
					<div className={styles.review__center}>
						<button onClick={() => setIsOpen(true)} className={styles.button}>
							Написать
						</button>
						<PopupReview isOpen={isOpen} onClose={() => setIsOpen(false)} />
						<div className={styles.review__bottom}>
							<Image alt='Отзыв' src={'/review.svg'} width={100} height={100} />
							<p className={styles.revTxt}>Ваш отзыв</p>
						</div>
					</div>
				</div>
				<div className={styles.review}>
					<h5 className={styles.text}>
						Прекрасная работа! Очень вкусные, нежные - не оторваться и как
						аппетитно выглядят прянички! Идеальный подарок на любой случай и
						возраст! Спасибо большое за оригинальные вкусняшки
					</h5>
					<div className={styles.review__bottom}>
						<Image alt='Отзыв' src={'/review2.png'} width={100} height={76} />
						<p className={styles.name}>Варвара</p>
					</div>
				</div>
			</div>
		</section>
	)
}
