import { NavMenu } from '../NavMenu/NavMenu';
import styles from './header.module.css';

export function Header() {
	return (
		<header className={styles['header']}>
			<NavMenu />
		</header>
	);
}
