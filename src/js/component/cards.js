/* import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


const Cards = (props) => {
    const { store, actions } = useContext(Context)
    return (
        <div class="card" style={{ width: "18rem" }}>
            <img src={`https://starwars-visualguide.com/assets/img/planets/${props.id + 1}.jpg`} class="card-img-top" alt="" />
            <div class="card-body">
                <h5 class="card-title">{props.planet.name}</h5>
                <p class="card-text">Rotation Period: {props.planet.rotation_period}</p>
                <p class="card-text">Orbital Period: {props.planet.orbital_period}</p>
                <Link to={"/about/planet/" + props.id}>
                    <span className="btn btn-primary">Learn More!</span>
                </Link>
                <button className="btn btn-secondary" onClick={() => actions.addfavorites(props.planet.name)}>Fav </button>
            </div>
        </div>
    )
}
export default Cards */