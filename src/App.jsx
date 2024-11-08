import { Route, Routes } from 'react-router-dom';
import { DefaultLayout } from './layouts/DefaultLayout';
import { Auth, Home, Register } from './pages/exporter';

export function App() {
	return (
		<Routes>
			<Route path='/' element={<DefaultLayout />}>
				<Route index element={<Home />} />
				<Route path={'auth'} element={<Auth />} />
				<Route path={'register'} element={<Register />} />
			</Route>
		</Routes>
	);
}
