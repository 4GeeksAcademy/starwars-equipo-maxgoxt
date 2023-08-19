import React from "react";
import { HomeCard } from "../component/card_home_max";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => (
	<div className="container">
		<h2 className="text-danger">Characters</h2>
	<div className="text-center mt-5 d-flex justify-content-between">
		<HomeCard></HomeCard>
		<HomeCard></HomeCard>
		<HomeCard></HomeCard>
		<HomeCard></HomeCard>
	</div>
	</div>
);
