import Collection from '../Collection/Collection'
import Reviews from '../Reviews/Reviews'
import styles from './Bg2.module.css'

export default function Bg2() {
	return (
		<div className={styles.bg}>
			<Collection />
			<Reviews />
		</div>
	)
}
