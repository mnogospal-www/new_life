import { Route, Routes } from 'react-router-dom';
import { DefaultLayout } from './layouts/DefaultLayout';
import { Home } from './pages/Home/Home';

export function App() {
	return (
		<Routes>
			<Route path='/' element={<DefaultLayout />}>
				<Route index element={<Home />} />
			</Route>
			{/* <Route path={'authorization'} element={<Authorization />} />
			<Route path={'recovery'} element={<Recovery />} />
			<Route path={'register'} element={<Register />} /> */}
		</Routes>
	);
}
