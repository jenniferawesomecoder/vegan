import React from 'react';
import { Link } from 'react-router-dom';

import Veganite from '../assets/image.png'

export default function Header(props) {
  return (
    <header>
      <img src={Veganite} alt="Veganite" />
     
      <Link to='/Home'>
      <p>Home</p> 
      </Link>
      <Link to='/recipes'>
        <p>Recipes</p>
      </Link>
      <Link to='gallery'>
        <p>Gallery</p>
      </Link>
      <img className="login-image" onClick={props.handleToggle} src="https://i.imgur.com/CgrWQMw.png" alt="login button" />
    </header>
  )
}
