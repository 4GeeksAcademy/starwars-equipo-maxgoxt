import React, { useState, useEffect, useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import imagen from "../../img/how-to.png";

export const HomeCardPlanet = props => {
    const [fav, setFav] = useState("far fa-heart")
    const i = useRef(i)

    const { store } = useContext(Context);

    return (
        <div>
            <div className="card mx-3" style={{ width: "18rem", flex: '0 0 250px' }}>
                <img src={imagen} className="card-img-top" alt='imagen' />
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <div className="mb-3">
                        <label>Population:</label><span>{store.detalledeplaneta.population}</span><br />
                        <label>Terrain:</label><span>{store.detalledeplaneta.population}</span><br />
                        <label>List:</label><span> item</span>
                    </div>
                    <div className="d-flex justify-content-between">
                        <Link to={"/singlePlaneta/" + (props.index)}>
                            <button type="button" className="btn btn-outline-primary">Learn more!</button>
                        </Link>
                        {/*AGREGAR NUMERO EN EL ID DEL <input/> PARA QUE FUNCIONE BIEN*/}
                        <input type="checkbox" className="btn-check" id="btn-check-outlined" autoComplete="off" />
                        <label className="btn btn-outline-warning" htmlFor="btn-check-outlined" 
                        onClick={() => { i.className !== 'far fa-heart' ? setFav("fas fa-heart") : setFav("far fa-heart")}}>
                            <i className={fav} ref={i}></i>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
};

HomeCardPlanet.propTypes = {
    index: PropTypes.number,
    name: PropTypes.string
};

HomeCardPlanet.defaultProps = {
    changeColor: null,
}