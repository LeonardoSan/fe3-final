import React from "react";
import { useState } from "react";


// const Form = () => {
//   //Aqui deberan implementar el form completo con sus validaciones

//   return (
//     <div>
//       <form>
//       </form>
//     </div>
//   );
// };

const Form = () => {
  //   const [name, setName] = useState("");
  //   const [address, setAddress] = useState("");

  const [patient, setPatient] = useState({
    name: "",
    email: "",
  });
  console.log(patient);
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);

  const handleChangeName = (event) => {
    // console.log(event.target.value);
    setPatient({ ...patient, name: event.target.value });
  };

  const handleChangeEmail = (event) => {
    // console.log(event.target.value);
    setPatient({ ...patient, email: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    console.log(emailRegex.test(patient.email));
    if (
      patient.name.trim().length > 5 &&
      emailRegex.test(patient.email)
    ) {
      setError(false);
      setShow(true);
    } else {
      setError(true);
    }
  };

  const reset = () => {
    setPatient({
      name: "",
      email: "",
    });
  };

  return (
    <>
      <>
        <form onSubmit={handleSubmit}>
          <label>Nombre: </label>
          <input
            type="text"
            value={patient.name}
            onChange={handleChangeName}
          />
          <label>E-mail: </label>
          <input
            type="text"
            value={patient.email}
            onChange={handleChangeEmail}
          />
          <button>Enviar</button>
        </form>
      </>  

      {show ? (
        <>
        <div>
            <h2>¡Gracias, {patient.name}!</h2>
            <h4>Te contactaremos cuanto antes vía mail: {patient.email}</h4>
          </div>
      </>  
      ) : (
        <>
         
        </>
      )}

      {error && (
        <h4 style={{ color: "red" }}>Por favor verifique su información</h4>
      )}
    </>
  );
};

export default Form;
