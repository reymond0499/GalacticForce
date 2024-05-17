import React, { useContext, useState } from 'react'
import { Card } from '../components/Card';
import { MovieContext } from '../components/MovieContext';
import {Search} from '../components/Search';


export const Home = () => {
	const { moviesData } = useContext(MovieContext);
	const [inputValue, setInputValue] = useState('');

	const matchesInputValue = (card) => {
		const lowerInput = inputValue.toLowerCase();
		return (
			card.name.toLowerCase().includes(lowerInput) ||
			card.ano.toString().toLowerCase().includes(lowerInput) ||
			card.director.toLowerCase().includes(lowerInput)
		);
	};

	return (
		<div>
			<div className='menu-header'>
				<div className='header-menu-container'>
					<h4 className='menu-title'>Bienvenidio al Menu de Galactic Force</h4>
					<p>Es hora de ser uno con la fuerza, escoje la pelicula que quieras alquilar o comprar.</p>
					<Search inputValue={inputValue} setInputValue={setInputValue}></Search>
					<span className='search-subtitle'>Puedes realizar una busqueda por nombre, director o año de estreno</span>
				</div>
			</div>
			<div className='card-container'>
			{moviesData.filter(matchesInputValue).map((card, index) => (
				<Card key={index} card={card} />
			))}
		</div>
		</div>
	)
}

