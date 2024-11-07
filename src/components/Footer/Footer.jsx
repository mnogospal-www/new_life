import styles from './footer.module.css';

export function Footer() {
	return (
		<footer className={styles['footer']}>
			<a href='tel:+7800123567'>8-800-123-45-67</a>
			<a href='mailto:mail@newlife.ru'>mail@newlife.ru</a>
		</footer>
	);
}
