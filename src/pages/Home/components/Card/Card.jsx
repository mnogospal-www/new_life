import styles from './card.module.css';

export function Card({ fileName, title, description }) {
	return (
		<div className={styles['card']}>
			<img src={`/home/${fileName}`} />
			<div>
				<h2 className={styles['title']}>{title}</h2>
				<div className={styles['description']}>{description}</div>
			</div>
		</div>
	);
}
