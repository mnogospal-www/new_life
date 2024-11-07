import styles from './comment.module.css';

export function Comment({ fileName, username, description, date }) {
	const img = {
		backgroundImage: `url(/home/${fileName})`,
	};

	return (
		<div className={styles['comment']}>
			<div>
				<div className={styles['preview']} style={img}></div>
				<h3 className={styles['username']}>{username}</h3>
			</div>

			<div className={styles['description']}>
				<div className={styles['text']}>{description}</div>
				{date}
			</div>
		</div>
	);
}
