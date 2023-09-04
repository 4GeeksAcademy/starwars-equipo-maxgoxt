import React, { useState, useEffect, useContext, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import imagen from "../../img/how-to.png";

export const HomeCardPers = props => {
    const [fav1, setFav1] = useState("far fa-heart");
    const refs1 = useRef([]);

    const { store, actions } = useContext(Context);

    useEffect(() => {
        refs1.current = refs1.current.slice(0, props.length); // Maintain the same number of refs as items
    }, [props.length]);

    const toggleFavorite1 = index => {
        const newFav = [...refs1.current];
        newFav[index].className = newFav[index].className !== "far fa-heart" ? "far fa-heart" : "fas fa-heart";
        refs1.current = newFav;

        actions.cargarFavorito(props.name, props.index);
    };


    return (
        <div>
            <div className="card mx-3" style={{ width: "18rem", flex: '0 0 250px' }}>
                <img src={"https://starwars-visualguide.com/assets/img/characters/" + (props.index + 1) + ".jpg"} className="card-img-top" alt='imagen' />
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <div className="mb-3">
                        <label>Genre: </label><span> {props.gender}</span><br />
                        <label>Hair Color:</label><span> {props.hairColor}</span><br />
                        <label>Eye-Color:</label><span> {props.eyeColor}</span>
                    </div>
                    <div className="d-flex justify-content-between">
                        <Link to={"/singlepersonaje/" + (props.index + 1)}>
                            <button type="button" className="btn btn-outline-primary">Learn more!</button>
                        </Link>
                        {/*AGREGAR NUMERO EN EL ID DEL <input/> PARA QUE FUNCIONE BIEN*/}
                        <input
                            type="checkbox"
                            className="btn-check"
                            id={"btn-check-outlined" + props.index}
                            autoComplete="off"
                        />
                        <label
                            className="btn btn-outline-warning"
                            htmlFor={"btn-check-outlined" + props.index + 1}
                            onClick={() => toggleFavorite1(props.index)}>
                            <i className={fav1} ref={el1 => (refs1.current[props.index] = el1)} id={props.name}></i>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
};

HomeCardPers.propTypes = {
    index: PropTypes.number,
    name: PropTypes.string,
    gender: PropTypes.string,
    eyeColor: PropTypes.string,
    hairColor: PropTypes.string
};

HomeCardPers.defaultProps = {
    changeColor: null,
}