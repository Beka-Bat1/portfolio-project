import React, { useState } from "react";
import digitalMenuAppimage from '../assets/images/digital-menu-app.jpeg';
import Modal from './Modal';


const Carousel = (props) => {
  const [show, setShow] = useState('false')


  const showModal = e => {
    setShow(!show);
  }

  
  const onClose = e => {
    this.props.onClose && this.props.onClose(e);
  };


  return (
    <>
    <Modal
                 onClose={() => showModal}
                 show={useState(show)}> 
                 Message in Modal
                 </Modal>
                 
      <div className="container-fluid carousel">
        <h1 className="text-center py-5"> Projects </h1>
        <div className="row d-flex flex-wrap">
          <div className="col-4">
            <div className="view view-first">
              <img src={digitalMenuAppimage} />
              <div className="mask">
                <h2>Title</h2>
                <p>Your Text</p>
                <a
                 onClick={e => showModal(e)} 
                className="info"
                id="centered-toggle-button"
 >
                  Read More
                </a>
              </div>
            </div>
          </div>

          <div className="col-4">
            <div className="view view-first">
              <img src="https://in.godaddy.com/blog/wp-content/uploads/web-development-projects-desk-with-open-laptop-min.jpg" />
              <div className="mask">
                <h2>Title</h2>
                <p>Your Text</p>
                <a href="#" className="info">
                  Read More
                </a>
              </div>
            </div>
          </div>

          <div className="col-4">
            <div className="view view-first">
              <img src="https://in.godaddy.com/blog/wp-content/uploads/web-development-projects-desk-with-open-laptop-min.jpg" />
              <div className="mask">
                <h2>Title</h2>
                <p>Your Text</p>
                <a href="#" className="info">
                  Read More
                </a>
              </div>
            </div>
          </div>

          <div className="col-4">
            <div className="view view-first">
              <img src="https://in.godaddy.com/blog/wp-content/uploads/web-development-projects-desk-with-open-laptop-min.jpg" />
              <div className="mask">
                <h2>Title</h2>
                <p>Your Text</p>
                <a href="#" className="info">
                  Read More
                </a>
              </div>
            </div>
          </div>

          <div className="col-4">
            <div className="view view-first">
              <img src="https://in.godaddy.com/blog/wp-content/uploads/web-development-projects-desk-with-open-laptop-min.jpg" />
              <div className="mask">
                <h2>Title</h2>
                <p>Your Text</p>
                <a href="#" className="info">
                  Read More
                </a>
              </div>
            </div>
          </div>
          
          <div className="col-4">
            <div className="view view-first">
              <img src="https://in.godaddy.com/blog/wp-content/uploads/web-development-projects-desk-with-open-laptop-min.jpg" />
              <div className="mask">
                <h2>Title</h2>
                <p>Your Text</p>
                <a href="#" className="info">
                  Read More
                </a>
              </div>
            </div>
          </div>

    
          <div className="col-4">
            <div className="view view-first">
              <img src="https://in.godaddy.com/blog/wp-content/uploads/web-development-projects-desk-with-open-laptop-min.jpg" />
              <div className="mask">
                <h2>Title</h2>
                <p>Your Text</p>
                <a href="#" className="info">
                  Read More
                </a>
              </div>
            </div>
          </div>

          
          <div className="col-4">
            <div className="view view-first">
              <img src="https://in.godaddy.com/blog/wp-content/uploads/web-development-projects-desk-with-open-laptop-min.jpg" />
              <div className="mask">
                <h2>Title</h2>
                <p>Your Text</p>
                <a href="#" className="info">
                  Read More
                </a>
              </div>
            </div>
          </div>


        </div>
      </div>
    </>
  );
};

export default Carousel;
