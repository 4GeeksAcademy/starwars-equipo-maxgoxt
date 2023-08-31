
import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SingleAuto = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();

    console.log(store.detallesAuto);
    console.log("hola-q");

    useEffect(() => {
        actions.obtenerAutoSingle(params.theid)
    }, [])


    return (
        <div className="jumbotron container">
            <div className="jumbotron d-flex align-items-center">
                <div className="jumbotron-content">
                    <div className="container">
                        <div className="row mb-5">
                            <div className="col-6 row" >
                                <img className="" src="https://i1.wp.com/www.astropt.org/blog/wp-content/uploads/2015/05/xw1.jpg" />
                            </div>
                            <div className="col-6" style={{ height: "30px" }}>
                                <h1>{store.detallesAuto.name} </h1>
                                <p>It is a lonnog established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                            </div>
                        </div>
                    </div>

                    <div className="container-flex">
                        <div className="row">
                            <div className="col-2">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Name</h5>
                                        <p className="card-text">
                                            {store.detallesAuto.name}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-2">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">model</h5>
                                        <p className="card-text">
                                            {store.detallesAuto.model}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-2">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">max_atmosphering_speed</h5>
                                        <p className="card-text">
                                            {store.detallesAuto.max_atmosphering_speed}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-2">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">passengers</h5>
                                        <p className="card-text">
                                            {store.detallesAuto.passengers}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-2">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">cargo_capacity</h5>
                                        <p className="card-text">
                                            {store.detallesAuto.passengers}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-2">
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

            <Link to="/">
                <span className="btn btn-primary btn-lg m-2" href="#" role="button">
                    Back home
                </span>
            </Link>
        </div>

    );
};





