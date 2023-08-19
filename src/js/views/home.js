import React from "react";
import { HomeCard } from "../component/card_home_max";
import "../../styles/home.css";

export const Home = () => (
	<div className="container">
		<h2 className="text-danger">Characters</h2>
		<div className="d-flex mb-5" style={{ overflowX: 'scroll', scrollSnapType: 'x mandatory' }}>
			<HomeCard></HomeCard>
			<HomeCard></HomeCard>
			<HomeCard></HomeCard>
			<HomeCard></HomeCard>
			<HomeCard></HomeCard>
			<HomeCard></HomeCard>
		</div>
		<h2 className="text-danger">Planets</h2>
		<div className="d-flex" style={{ overflowX: 'scroll', scrollSnapType: 'x mandatory' }}>
			<HomeCard></HomeCard>
			<HomeCard></HomeCard>
			<HomeCard></HomeCard>
			<HomeCard></HomeCard>
			<HomeCard></HomeCard>
			<HomeCard></HomeCard>
		</div>
	</div>
);
