import React from 'react'
import Card from '../Components/Card'
import axios from "axios";
import { useContextGlobal } from "../Components/utils/global.context";
import { useEffect, useState } from "react";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const titleStyles = {
  backgroundColor: "#ffda92",
  color: "firebrick",
  width: "20%",
  margin: "10px auto",
  borderRadius: "10px",
};

const Home = () => {
  const { state } = useContextGlobal();
  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        {state.doctors.map((doctor) => (
          <Card key={doctor.id} doctor={doctor} />
        ))}
      </div>
    </main>
  )
}

export default Home