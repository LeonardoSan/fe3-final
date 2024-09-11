import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import { routes } from "../Components/utils/routes";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const navigate = useNavigate();

  return (
    <nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <h2><span>D</span>H Odonto</h2>
      <div className='links'>
        <Link to={routes.home}>
          <h4>Home</h4>
        </Link>
        <Link to={routes.contact}>
          <h4>Contact</h4>
        </Link>
        <Link to={routes.favs}>
          <h4>Favs</h4>
        </Link>
        <div>
          <button className='theme'>🌙</button>
        </div>
        
      </div>
     
    </nav>
  )
}

export default Navbar