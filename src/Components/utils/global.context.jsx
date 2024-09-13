import {
  createContext, 
  useContext,
  useState,
  useEffect,
  useReducer
 } from "react";
import axios from "axios";
import { reducer } from "../utils/reducers";

const ContextGlobal = createContext();


const initialState = {
  doctors: []
};

const lsfavs = JSON.parse(localStorage.getItem("favs")) || [];

export const Context = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);

  const [favs, setFavs] = useState(lsfavs);
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
};

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
    <ContextGlobal.Provider value={{ state, dispatch, favs, setFavs,  theme, setTheme, toggleTheme  }}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default Context;

export const useContextGlobal = () => useContext(ContextGlobal);