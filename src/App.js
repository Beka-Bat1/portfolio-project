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
import burgerBuilderImage from './static/images/burger-builder.jpg'
import nintendoTasksImage from './static/images/nintendo-tasks.jpg'
import quoteMachineImage from './static/images/quote-machine.jpg'
import starterProjectImage from './static/images/react-starter-project.jpg'
import telegramCloneImage from './static/images/telegram-clone.jpg'
import Certificates from "./components/Certificates";

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

  const closeModal = () => {
    setIsOpen(false)
  }

  let storage = [
    {
      image: digitalMenuAppimage,
      title: 'Digital Menu',
      text: 'Scan Restaurant Menu with QR code',
      projectLink: 'https://github.com/Beka-Bat1/digital-menu-react'
    },
    {
      image: burgerBuilderImage,
      title: 'Burger Builder App',
      text: 'In app you can build your favourite burger and order it now!',
      projectLink: 'https://github.com/Beka-Bat1/burger-builder-app'
    },
    {
      image: nintendoTasksImage,
      title: 'Nintendo Themed Tasks',
      text: 'Add, check and remove any task you want to do today ...',
      projectLink: ''
    },
    {
      image: quoteMachineImage,
      title: 'Quote Machine',
      text: 'Randomly read most known and wiseful quotes',
      projectLink: ''
    },
    {
      image: starterProjectImage,
      title: 'Starter Project in React',
      text: 'Shop the furniture :) ',
      projectLink: ''
    },
    {
      image: telegramCloneImage,
      title: 'Telegram Clone',
      text: 'clone of Telegram chat, try it now',
      projectLink: ''
    }
  ]

  let modal = (
    <Modal 
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyle}
          contentLabel="Example Modal"
        >
          <h2>{modalContent.title}</h2>
        <div className="container d-flex justify-content-between my-4">
          <div>{modalContent.text}</div>
          <a href={modalContent.projectLink} target="_blank"><i class="fas fa-external-link-alt text-primary"></i> Open on Github</a>
        </div>
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
       <Certificates />
      <div className="container my-5">
        {modal}
      </div>
    </div>
  );
}

export default App;
