import React from 'react';
import image from '../../assets/people.jpg'
import './styles.scss'

interface ContentProps{
  modalOpen: () => void;
}

function Content({modalOpen}: ContentProps) {
  return (
    <section className='section'>
      <div className='content'>
        <img src={image} className='img' />
        <div className='infos'>
          <p className='available'>*Disponível no Chrome & Edge</p>

          <p className='chamada'>
            Assista <span>vídeos</span> com</p>
          <p className='chamada'>seus <span>amigos.</span></p>

          <p className='chamada2'>Compartilhe bons momentos<br />Uma nova maneira de assistir vídeos juntos</p>

        <button onClick={modalOpen} className='btn__create'>Faça o teste</button>
        </div>
      </div>

      <div className='watch__on'>
        <p>Assista junto nas plataformas</p>
      </div> 

    </section>
  )
}

export default Content