import styles from './form.module.css';

export function Form({ children, ...props }) {
	return (
		<form className={styles['form']} {...props}>
			{children}
		</form>
	);
}
