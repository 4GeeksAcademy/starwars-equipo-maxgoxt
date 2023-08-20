import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import imagen from "../../img/how-to.png";

export const HomeCard = props => {

    const { store, actions } = useContext(Context);

    return (
        <div>
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
                        <Link to={"/single/" + props.index}>
                            <button type="button" className="btn btn-outline-primary">Learn more!</button>
                        </Link>
                        {/*AGREGAR NUMERO EN EL ID DEL <input/> PARA QUE FUNCIONE BIEN*/}
                        <input type="checkbox" className="btn-check" id="btn-check-outlined" autoComplete="off" />
                        <label className="btn btn-outline-warning" htmlFor="btn-check-outlined" onClick={() => actions.changeColor(props.index, '#000')}>
                            {// Conditional render example
								// Check to see if the background is orange, if so, display the message
								props.initial === "#fec004" ? (
									<i className="fa fa-heart" style={{ color: props.initial }}></i>
								) : <i className="fa fa-heart" style={{ color: props.background }}></i>}
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
};

HomeCard.propTypes = {
    index: PropTypes.number,
    initial: PropTypes.string,
    background: PropTypes.string,
};

HomeCard.defaultProps = {
    changeColor: null,
}