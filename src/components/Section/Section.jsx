import styles from './section.module.css';

export function Section({ children }) {
	return <section className={styles['section']}>{children}</section>;
}
