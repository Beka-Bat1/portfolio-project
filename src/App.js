import "./App.css";
import React, {useState} from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Content from "./components/Content";
import Carousel from './components/Carousel'
import Modal from 'react-modal';
import digitalMenuAppimage from './static/images/digital-menu.jpeg';

const customStyle = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    width : '80%',
    maxHeight: '100vh'
  }
};

Modal.setAppElement('#root')

function App() {
  var subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const openModal = (project) => {
    setModalContent(project);
    setIsOpen(true);
  }

  const afterOpenModal = () => {
    subtitle.style.color = '#f00';
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  let storage = [
    {
      image: digitalMenuAppimage,
      title: 'Digital Menu',
      text: 'Scan Restaurant Menu with QR code',
      projectLink: ''
    }
  ]

  let modal = (
    <Modal 
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyle}
          contentLabel="Example Modal"
        >
          <h2 ref={_subtitle => (subtitle = _subtitle)}>{modalContent.title}</h2>
          <div>{modalContent.text}</div>
          <img className="img-fluid" src={modalContent.image} alt="sheep" />
          <div className="d-md-flex justify-content-md-end">
            <button className='btn btn-primary pull-right' onClick={closeModal}>close</button>
          </div>
        </Modal>
  )


  return (
    <div className="App">
      <Particles
        className="particles-canvas"
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 900,
              },
            },
            shape: {
              type: "circle",
              stroke: {
                width: 6,
                color: "#f9ab00",
              },
            },
          },
        }}
      />
      <Navbar />
      <Header />
      <Content />
      <Carousel 
      openModal={openModal}
      storage={storage}
       />
      <div className="container my-5">
        {modal}
      </div>
    </div>
  );
}

export default App;
