import { Button, Form, Input } from '../../../../components/exporter';
import styles from './search.module.css';

export function Search() {
	return (
		<Form>
			<div className={styles['wrapper']}>
				<Input
					type={'text'}
					placeholder={'Быстрый поиск: вид, порода, район'}
				/>
				<Button>
					<img src='/search.svg' />
				</Button>
			</div>
		</Form>
	);
}
