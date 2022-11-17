import './styles/app.scss'
// Components
import Header from "./components/Header"
import Content from "./components/Content";

// Hooks
import { useRef, useState } from "react";

// External Libraries
import io from 'socket.io-client';
import Modal from 'react-modal';

const socket = io('http://localhost:3030')

function App() {

  // Video Player
  const [videoUrl, setVideoUrl] = useState('');
  const [roomName, setRoomName] = useState('');

  // Modal
  const [modalOpen, setModalOpen] = useState(false);

  function openModal() {
    setModalOpen(true)
  }

  function closeModal() {
    setModalOpen(false)
  }

  socket.on('connection', () => {
    console.log('Conectou')
  })

  return (
    <div className="App">
      <Header />
      <Content modalOpen={openModal} />    

      <Modal
        isOpen={modalOpen}
        onRequestClose={closeModal}
        overlayClassName="modal-overlay"
        className="modal-content"
      >
        <label htmlFor="room-name">Nome da sala</label>
        <input
          id="room-name"
          type="text"
          onChange={e => setRoomName(e.target.value)}
          value={roomName}
        />

        <label htmlFor="video-url">Link video</label>
        <input
          id='video-url'
          type="url"
          onChange={e => setVideoUrl(e.target.value)}
          value={videoUrl}
        />

        <button>Criar sala</button>
      </Modal>
    </div>
  )
}

export default App
