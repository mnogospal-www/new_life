import { Link } from 'react-router-dom';
import styles from './nav-menu.module.css';

export function NavMenu() {
	return (
		<>
			<input type='checkbox' id='menu' />
			<label htmlFor='menu'>≡</label>

			<nav className={styles['nav']}>
				<Link to='/'>Главная</Link>
				<Link to=''>Поиск</Link>
				<Link to=''>Добавить</Link>
				<Link to=''>Отзывы</Link>
				<Link to='register'>Регистрация</Link>
				<Link to='auth'>Личный кабинет</Link>
			</nav>
		</>
	);
}
