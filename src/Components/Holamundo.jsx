import React from 'react';

const HolaMundo = () => {
	const Hello = '¡Hola Mundo!';
	const isTrue = true;
	return (
		<div className= "HolaMundo">
			<h1>{Hello}</h1>
			<h2>Curso Esencial de React</h2>
			<img src = "https://cdn.auth0.com/blog/react-js/react.png" alt = "React" />
			{isTrue ? <h4>Esto es Verdadero </h4> : <h5> Soy Falso </h5>}
			{isTrue && <h5>Soy verdadero </h5>}
		</div>
	);
};

export default HolaMundo;