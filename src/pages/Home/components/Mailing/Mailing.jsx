import styles from './mailing.module.css';
import { Button, Form, Input } from '../../../../components/exporter';
import { useState } from 'react';

export function Mailing() {
	const [email, setEmail] = useState('');

	const onSubmit = (event) => {
		event.preventDefault();

		if (email.length > 0) {
			const data = {
				email,
			};

			fetch('https://server/mailing.php', {
				method: 'POST',
				body: JSON.stringify(data),
			});

			setEmail('');
		}
	};

	const onChange = ({ target }) => {
		setEmail(target.value);
	};

	return (
		<Form onSubmit={onSubmit}>
			<div className={styles['wrapper']}>
				<Input
					type={'email'}
					placeholder={'Email'}
					onChange={onChange}
					value={email}
				/>
				<Button>Подписаться</Button>
			</div>
		</Form>
	);
}
