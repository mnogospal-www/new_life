import styles from './about.module.css';

export function About() {
	return (
		<div className={styles['about']}>
			<div className={styles['card']}>
				<img src='/home/pet.svg' />
				Помогли найти более 500 животных
			</div>

			<div className={styles['card']}>
				<img src='/home/love.svg' />
				Более трех лет способствуем возвращению питомцев к хозяевам
			</div>

			<div className={styles['card']}>
				<img src='/home/smile.svg' />
				Все услуги оказываются бесплатно
			</div>
		</div>
	);
}
