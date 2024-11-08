import { Link } from 'react-router-dom';
import { Section } from '../../components/exporter';
import { About, Banner, Comments, Search, Slider } from './components/exporter';
import { Mailing } from './components/Mailing/Mailing';

export function Home() {
	const lostToday = [
		{
			id: 1,
			fileName: 'lost.png',
			title: 'Тузик',
			description: 'Сорвался с поводка',
		},
		{
			id: 2,
			fileName: 'lost.png',
			title: 'Тузик',
			description: 'Сорвался с поводка',
		},
		{
			id: 3,
			fileName: 'lost.png',
			title: 'Тузик',
			description: 'Сорвался с поводка',
		},
		{
			id: 4,
			fileName: 'lost.png',
			title: 'Тузик',
			description: 'Сорвался с поводка',
		},
	];

	const comments = [
		{
			id: 1,
			fileName: 'comment.png',
			username: 'Александр',
			description:
				'Помогли всё вместе! Мои объявления и неравнодушные люди. Благодарю! ❤️',
			date: '12.12.2024',
		},
		{
			id: 2,
			fileName: 'comment.png',
			username: 'Анна',
			description:
				'Помогли всё вместе! Мои объявления и неравнодушные люди. Благодарю! ❤️',
			date: '12.12.2024',
		},
		{
			id: 3,
			fileName: 'comment.png',
			username: 'Анна',
			description:
				'Помогли всё вместе! Мои объявления и неравнодушные люди. Благодарю! ❤️',
			date: '12.12.2024',
		},
	];

	const found = [
		{
			id: 0,
			fileName: 'found.png',
			title: 'Кошка Соня',
		},
		{
			id: 1,
			fileName: 'found.png',
			title: 'Кошка Соня',
		},
		{
			id: 2,
			fileName: 'found.png',
			title: 'Кошка Соня',
		},
		{
			id: 3,
			fileName: 'found.png',
			title: 'Кошка Соня',
		},
	];

	return (
		<>
			<Banner />
			<Search />

			<Section>
				<h1>Потерялись сегодня</h1>
				<Slider items={lostToday} />
				<Link to='#'>Посмотреть всех</Link>
			</Section>

			<Section>
				<h1>О нас</h1>
				<About />
			</Section>

			<Section>
				<Comments items={comments} />
				<Link to='#'>Читать все</Link>
			</Section>

			<Section>
				<h1>Нашлись недавно</h1>
				<Slider items={found} />
				<Link to='#'>Посмотреть всех</Link>
			</Section>

			<Section>
				<h1>Подпишись на нашу рассылку!</h1>
				<Mailing />
			</Section>
		</>
	);
}
