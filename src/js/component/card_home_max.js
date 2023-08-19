import React, { useState, useEffect, useContext } from "react";
import imagen from "../../img/how-to.png";

export const HomeCard = () => {

    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src={imagen} className="card-img-top" alt='imagen' />
            <div className="card-body">
                <h5 className="card-title d-flex justify-content-start">Card title</h5>
                <div className="text-start mb-2">
                    <label>List:</label><span> item</span><br/>
                    <label>List:</label><span> item</span><br/>
                    <label>List:</label><span> item</span>
                </div>
                <div className="d-flex justify-content-between">
                <button type="button" className="btn btn-outline-primary">Learn more!</button>
                <button type="button" className="btn btn-outline-warning"><i className="fa fa-heart" style={{color: "#fec004"}}></i></button>
                </div>
            </div>
        </div>
    )
}