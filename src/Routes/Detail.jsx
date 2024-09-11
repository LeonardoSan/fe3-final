import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  const [recipe, setRecipe] = useState({});
  const [loading, setLoading] = useState(true);
  const params = useParams();
  console.log(params);
  const url = `https://jsonplaceholder.typicode.com/users/${params.id}`;

  useEffect(() => {
    axios(url)
      .then((res) => {
        console.log(res.data);
        setRecipe(res.data);
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h1>Detail Dentist id </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <div>
      {loading ? (
        "Cargando información..."
      ) : (
        <>
          <table border="1">
              <tr>
                  <td>Name</td>
                  <td>Email</td>
                  <td>Phone</td>
                  <td>Website</td>
              </tr>
              <tr>
                  <td>{recipe.name}</td>
                  <td>{recipe.email}</td>
                  <td>{recipe.phone}</td>
                  <td>{recipe.website}</td>
              </tr>
          </table>
          {/* <div dangerouslySetInnerHTML={{ __html: recipe.instructions }} /> */}
        </>
      )}
    </div>
    </>
  )
}

export default Detail