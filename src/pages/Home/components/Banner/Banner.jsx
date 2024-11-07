import { Button } from '../../../../components/exporter';
import styles from './banner.module.css';

export function Banner() {
	return (
		<div className={styles['banner']}>
			<div className={styles['preview']}></div>
			<div className={styles['wrapper']}>
				<div>
					<h1>НОВАЯ ЖИЗНЬ</h1>
					<h2>Поиск домашних животных</h2>
				</div>
				<Button>Подробнее</Button>
			</div>
		</div>
	);
}
