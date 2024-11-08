import { Comment } from '../exporter';
import styles from './comments.module.css';

export function Comments({ items }) {
	return (
		<div className={styles['comments']}>
			{items.map((props) => (
				<Comment {...props} key={props.id} />
			))}
		</div>
	);
}
