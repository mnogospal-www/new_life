import { Card } from '../exporter';
import styles from './slider.module.css';

export function Slider({ items }) {
	return (
		<div className={styles['slider']}>
			{items.map((props) => (
				<Card {...props} key={props.id} />
			))}
		</div>
	);
}
