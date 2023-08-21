import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div className="jumbotron">
			
			{/* const getPlanets = async () => {
  const response = await axios.get('https://swapi.tech/api/planets');
  return response.data.results;
}; */}

			<h1 className="display-4"></h1>

			<hr className="my-4" />

			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home

					{/* fetch("https://www.swapi.tech/api/planets/1")
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.error(err)) */}

				</span>
			</Link>
		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
// 
	// <Columna> _ _
	// 	<Tarjeta> _ _
	// 		< Tarjeta . Img  variant = "top"  src = " https://raw.githubusercontent.com/NicolasArayaB/starwars-blog-reading-list/master/dist/ img/ darthVader .jpg"  width = "200"  / >
	// 		< Tarjeta . Img  variante = "superior"  src = " ./ img/ darthvader .jpg"  ancho = "200"  / >
	// 		< Tarjeta . Cuerpo >
	// 			< Tarjeta . Título > { accesorios . personaje _ nombre } < / Tarjeta . Título >
	// 			{ tienda de caracteres [ 0 ] ? (
