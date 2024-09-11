import React from "react";
import Card from "../Components/Card";
import { useRecipeStates } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { state } = useRecipeStates();
  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {state.cart.map((recipe) => (
        <Card key={recipe.id} recipe={recipe} />
      ))}
      </div>
    </>
  );
};

export default Favs;
