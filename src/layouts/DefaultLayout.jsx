import { Outlet } from 'react-router-dom';
import { Footer, Header } from '../components/exporter';
import { Container, Main } from './components/exporter';

export function DefaultLayout() {
	return (
		<Container>
			<Header />

			<Main>
				<Outlet />
			</Main>

			<Footer />
		</Container>
	);
}
