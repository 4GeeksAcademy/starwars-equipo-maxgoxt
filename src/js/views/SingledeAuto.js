
import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { auto } from "../component/auto.js"

export const SingleAuto = props => {
    const { store, actions } = useContext(Context);
    const params = useParams();

    console.log(store.detallesAuto);
    console.log("hola");


    useEffect(() => {
        actions.obtenerAutoSingle(params.theid)
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
                                <h1>{store.detallesAuto.name} </h1>
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
                                            {store.detallesAuto.name}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">model</h5>
                                        <p className="card-text">
                                            {store.detallesAuto.model}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">max_atmosphering_speed</h5>
                                        <p className="card-text">
                                            {store.detallesAuto.max_atmosphering_speed}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">passengers</h5>
                                        <p className="card-text">
                                            {store.detallesAuto.passengers}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">cargo_capacity</h5>
                                        <p className="card-text">
                                            {store.detallesAuto.cargo_capacity}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">vehicle_class</h5>
                                        <p className="card-text">
                                            {store.detallesAuto.vehicle_class}
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