import React, { useState } from "react";
import digitalMenuAppimage from "../static/images/digital-menu.jpeg";

const Carousel = (props) => {
  return (
    <>
      <div className="container-fluid carousel">
        <h1 className="text-center py-5"> Projects </h1>
        <div className="row d-flex flex-wrap">
          {props.storage.map((project, key) => (
            <div className="col-4">
              <div className="view view-first">
                <img src={project.image} />
                <div className="mask">
                  <h2>{project.title}</h2>
                  <p>{project.text}</p>
                  <a
                    onClick={() => props.openModal(project)}
                    className="info"
                    id="centered-toggle-button"
                  >
                    View Image
                  </a>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </>
  );
};

export default Carousel;
