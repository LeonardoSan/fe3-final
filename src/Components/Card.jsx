import React from "react";
import { useRecipeStates } from '../Components/utils/global.context';
import { Link } from "react-router-dom";
import doctor from "../../public/images/doctor.jpg";


//const Card = ({ name, username, id }) => {


//   const addFav = ()=>{
//     // Aqui iria la logica para agregar la Card en el localStorage
//   }

//   return (
//     <div className="card">
//         {/* En cada card deberan mostrar en name - username y el id */}

//         {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

//         {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
//         <button onClick={addFav} className="favButton">Add fav</button>
//     </div>
//   );
// };

const Card = ({ recipe }) => {
  const { id, name, username  } = recipe;
  // const urlImg = 'https://static.vecteezy.com/system/resources/previews/002/181/615/original/medical-doctor-general-practitioner-physician-profile-avatar-cartoon-vector.jpg';
  const { dispatch } = useRecipeStates();

    const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    dispatch({ type: "ADD_CART", payload: recipe });
    alert('Se agrego a favoritos');
 }
  return (
    <div className="card">
      <img src={doctor} alt="" />
      <Link to={"/detail/" + id}>
      <h3>{name}</h3>
      </Link>
      <h4>{username}</h4>
      {/* <Button onClick={() => setCart((prev) => [...prev, recipe])}> */}
      <button onClick={addFav} className="favButton">Add fav ⭐</button>
    </div>
  );
};

export default Card;
