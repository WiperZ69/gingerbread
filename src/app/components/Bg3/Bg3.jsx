import FAQ from '../FAQ/FAQ'
import Footer from '../Footer/Footer'
import Form from '../Form/Form'
import styles from './Bg3.module.css'

export default function Bg3() {
	return (
		<div className={styles.bg}>
			<FAQ />
			<div className={styles.bg2}>
				<Form />
				<Footer />
			</div>
		</div>
	)
}
