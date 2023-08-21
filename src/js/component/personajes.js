import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Personajes = props => {
  const { store } = useContext(Context);
  const params = useParams();

  return (
       <div className="jumbotron d-flex align-items-center">
       <div className="jumbotron-content">    
       <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src="https://media.gq.com.mx/photos/5dfbaf25d811050008602c46/16:9/w_1280,c_limit/star%20wars.jpg"/>
        </div> 
        <div className="col-md-6">
          <h1>This will show the demo element: {store.demo[params.theid].title}</h1>
          <p>ihdskadiasndlkasmdñlasda</p>
        </div>
      </div>
    </div>
     
      <div className="container-flex">
        <div className="row">
          <div className="col-md-2">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
   </div>
     
    </div>

  );
};

Personajes.propTypes = {
  match: PropTypes.object
};

export default Personajes;