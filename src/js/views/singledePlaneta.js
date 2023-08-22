import  "../../styles/planeta.css"
import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Personajes } from "../component/personajes.js"

export const SinglePlaneta = props => {
    const { store, actions } = useContext(Context);
    const params = useParams();

    console.log(store.detalledePlaneta);
    console.log("hola");


    useEffect(() => {
        actions.obtenerPlanetaSingle(params.theid)
    }, [])
    return (
        <div className="jumbotron">
            <div className="jumbotron d-flex align-items-center">
                <div className="jumbotron-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <img src="https://media.gq.com.mx/photos/5dfbaf25d811050008602c46/16:9/w_1280,c_limit/star%20wars.jpg" />
                            </div>
                            <div className="col-md-6">
                                <h1>{store.detalledePlaneta.name} </h1>
                                <p>ihdskadiasndlkasmdñlasda</p>
                            </div>
                        </div>
                    </div>

                    <div className="container-flex">
                        <div className="row">
                            <div className="col-md-2">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Name</h5>
                                        <p className="card-text">
                                        {store.detalledePlaneta.name} 
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Climate</h5>
                                        <p className="card-text">
                                        {store.detalledePlaneta.climate}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Population</h5>
                                        <p className="card-text">
                                        {store.detalledePlaneta.population}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Orbital_period</h5>
                                        <p className="card-text">
                                        {store.detalledePlaneta.orbital_period}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Rotation_period</h5>
                                        <p className="card-text">
                                        {store.detalledePlaneta.rotation_period}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2">
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
            {/* <Personajes/> */}
            <Link to="/">
                <span className="btn btn-primary btn-lg" href="#" role="button">
                    Back home


                </span>
            </Link>

        </div>
    );
};