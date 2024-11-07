import { Button } from '../../../../components/ui/Button/Button';
import { Input } from '../../../../components/ui/Input/Input';
import styles from './search.module.css';

export function Search() {
	return (
		<form>
			<Input type={'text'} placeholder={'Быстрый поиск: вид, порода, район'} />
			<Button>
				<img src='/search.svg' />
			</Button>
		</form>
	);
}
