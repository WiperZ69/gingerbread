'use client'

import { useEffect } from 'react'
import styles from './PopupReview.module.scss'

export default function PopupReview({ isOpen, onClose }) {
	// закрытие по Esc
	useEffect(() => {
		const handleEsc = e => {
			if (e.key === 'Escape') onClose()
		}
		document.addEventListener('keydown', handleEsc)
		return () => document.removeEventListener('keydown', handleEsc)
	}, [onClose])

	if (!isOpen) return null

	return (
		<div className={styles.overlay} onClick={onClose}>
			<div className={styles.popup} onClick={e => e.stopPropagation()}>
				<form className={styles.form}>
					<input type='text' placeholder='Имя' />
					<textarea placeholder='Ваше пряничное мнение'></textarea>
					<button onClick={onClose} type='submit'>
						Отправить
					</button>
				</form>
				<button className={styles.close} onClick={onClose}>
					×
				</button>
			</div>
		</div>
	)
}
