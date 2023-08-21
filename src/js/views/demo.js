import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { HomeCard } from "../component/card_home_max";
import { Context } from "../store/appContext";

export const Demo = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			{store.demo.map((item, index) => {
				return (
					<div key={index}>
						<h2 className="text-danger">{item.title}</h2>
						<div key={index} className="d-flex mb-5" style={{ overflowX: 'scroll', scrollSnapType: 'x mandatory' }}>
						<HomeCard index={index} background={item.background} initial={item.initial}></HomeCard>
						</div>
					</div>
				)
			})}
			<br />
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>
	);
};
