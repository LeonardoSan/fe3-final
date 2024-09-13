import React from "react";
import { useContextGlobal } from '../Components/utils/global.context';
import { Link } from "react-router-dom";
import imgDoctor from "../../public/images/doctor.jpg";

const Card = ({ doctor }) => {
  const { id, name, username  } = doctor;
  // const urlImg = 'https://static.vecteezy.com/system/resources/previews/002/181/615/original/medical-doctor-general-practitioner-physician-profile-avatar-cartoon-vector.jpg';
  const { dispatch, setFavs } = useContextGlobal();

    const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    setFavs((favs) => [...favs, doctor]);
    alert('Se agrego a favoritos');
 }
  return (
    <div className="card">
      <img src={imgDoctor} alt="" />
      <Link to={"/detail/" + id}>
      <h3>{name}</h3>
      </Link>
      <h4>{username}</h4>
      <button onClick={addFav} className="favButton">Add fav ⭐</button>
    </div>
  );
};

export default Card;
