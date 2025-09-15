import Header from '../Header/Header'
import Hero from '../Hero/Hero'
import styles from './Bg.module.scss'

export default function Bg() {
	return (
		<div className={styles.bg}>
			<Header />
			<Hero />
		</div>
	)
}
