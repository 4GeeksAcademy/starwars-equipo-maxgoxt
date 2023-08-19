import React, { useState, useEffect, useContext } from "react";
import imagen from "../../img/how-to.png";

export const HomeCard = () => {

    return (
        <div className="card mx-3" style={{ width: "18rem", flex: '0 0 250px' }}>
            <img src={imagen} className="card-img-top" alt='imagen' />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <div className="mb-3">
                    <label>List:</label><span> item</span><br />
                    <label>List:</label><span> item</span><br />
                    <label>List:</label><span> item</span>
                </div>
                <div className="d-flex justify-content-between">
                    <button type="button" className="btn btn-outline-primary">Learn more!</button>
                    {/*AGREGAR NUMERO EN EL ID DEL <input/> PARA QUE FUNCIONE BIEN*/}
                    <input type="checkbox" className="btn-check" id="btn-check-outlined" autoComplete="off" />
                    <label className="btn btn-outline-warning" htmlFor="btn-check-outlined"><i className="fa fa-heart" style={{ color: "#fec004" }}></i></label>
                </div>
            </div>
        </div>
    )
}