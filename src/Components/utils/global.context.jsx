import {
  createContext, 
  useContext,
  useState,
  useEffect,
  useReducer
 } from "react";
import axios from "axios";

//export const initialState = {theme: "", data: []}

const ContextGlobal = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "GET_DOCTORS":
      return { ...state, doctors: action.payload };
    default:
      throw new Error();
  }
};


const initialState = {
  doctors: []
};

const lsfavs = JSON.parse(localStorage.getItem("favs")) || [];

export const Context = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);

  const [favs, setFavs] = useState(lsfavs);

  const url =
    "https://jsonplaceholder.typicode.com/users/";

  useEffect(() => {
    axios(url).then((res) => {
      console.log(res.data);
      dispatch({ type: "GET_DOCTORS", payload: res.data });
    });
  }, []);

  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(favs));
  }, [favs]);

  return (
    <ContextGlobal.Provider value={{ state, dispatch, favs, setFavs }}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default Context;

export const useContextGlobal = () => useContext(ContextGlobal);