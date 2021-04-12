import React from "react";
import "./Certificates.css";
import algorithmsCertificate from "../static/images/algorithms-and-datastructures.jpeg";
import cs50x from "../static/images/CS50x.jpeg";
import frontendCertificate from "../static/images/frontend-libraries.jpeg";
import responsiveCertificate from "../static/images/responsive-web-design.jpeg";
import cCertificate from "../static/images/sololearn-c.jpg";
import reactCertificate from "../static/images/sololearn-react.jpg"

const Certificates = () => {
  return (
    <>
      <div className="contaienr" id="certificates">
        <h1 className="text-center py-5">Certificates</h1>

        <div
          className="gallery js-flickity"
          data-flickity-options='{ "wrapAround": true }'
        >
          <div className="gallery-cell">
            <img
              className="img-fluid"
              src={cCertificate}
              alt="certificate__image"
            />
          </div>
          <div className="gallery-cell">
            <img
              className="img-fluid"
              src={algorithmsCertificate}
              alt="certificate__image"
            />
          </div>
          <div className="gallery-cell">
            <img className="img-fluid" src={cs50x} alt="certificate__image" />
          </div>
          <div className="gallery-cell">
            <img
              className="img-fluid"
              src={frontendCertificate}
              alt="certificate__image"
            />
          </div>

          <div className="gallery-cell">
            <img
              className="img-fluid"
              src={responsiveCertificate}
              alt="certificate__image"
            />
          </div>

          <div className="gallery-cell">
            <img
              className="img-fluid"
              src={reactCertificate}
              alt="certificate__image"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Certificates;
