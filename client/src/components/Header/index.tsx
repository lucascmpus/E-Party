import React from 'react'
import './styles.scss'

function Header() {
  return (
    <header className='header'>
      <div className='header__div'>

        <p className='logo'>
          <a href="#">
            <span>e-</span>party
          </a>
        </p>

        <ul className='menu__ul'>
          <li><a href="#">Home</a></li>
          <li><a href="#">Sobre</a></li>
        </ul>

        <button className='btn__create'>Criar sala</button>

      </div>   
    </header>
  )
}

export default Header