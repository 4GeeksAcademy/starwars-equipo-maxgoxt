// import  "../../styles/planeta.css"
import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SinglePlaneta = props => {
    const { store, actions } = useContext(Context);
    const params = useParams();

    console.log(store.detalledePlaneta);
    console.log("hola");


    useEffect(() => {
        actions.obtenerPlanetaSingle(params.theid + 1)
    }, [])
    return (
        <div className="jumbotron container" >
            <div className="jumbotron d-flex align-items-center">
                <div className="jumbotron-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6" style={{marginBottom:"20px"}}>
                                {params.theid == 0 ?
                                    <img src="https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png" /> :

                                    <img src={"https://starwars-visualguide.com/assets/img/planets/" + (params.theid + 1) + ".jpg"} />}
                            </div>
                            <br/>
                            <div className="col-md-6">
                                <h1>{store.detalledePlaneta.name} </h1>

                            </div>
                        </div>
                    </div>

                    <div className="container-flex">
                        <div className="row">
                            <div className="col">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Name</h5>
                                        <p className="card-text">
                                            {store.detalledePlaneta.name}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Climate</h5>
                                        <p className="card-text">
                                            {store.detalledePlaneta.climate}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Population</h5>
                                        <p className="card-text">
                                            {store.detalledePlaneta.population}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Orbital_period</h5>
                                        <p className="card-text">
                                            {store.detalledePlaneta.orbital_period}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Rotation_period</h5>
                                        <p className="card-text">
                                            {store.detalledePlaneta.rotation_period}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Diameter</h5>
                                        <p className="card-text">
                                            {store.detalledePlaneta.diameter}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <br />

            <Link to="/">
                <span className="btn btn-outline-primary btn-lg float-end" role="button">
                    Back home


                </span>
            </Link>
            <br />

        </div>
    );
};