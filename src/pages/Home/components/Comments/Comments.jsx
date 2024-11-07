import { Comment } from '../exporter';
import styles from './comments.module.css';

export function Comments({ items }) {
	return (
		<div className={styles['comments']}>
			{items.map((item) => (
				<Comment {...item} key={item.id} />
			))}
		</div>
	);
}
