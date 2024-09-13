import {
  createContext, 
  useContext,
  useState,
  useEffect,
  useReducer
 } from "react";
import axios from "axios";

//export const initialState = {theme: "", data: []}

//export const ContextGlobal = createContext(undefined);

const RecipeStates = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "GET_RECIPES":
      return { ...state, recipes: action.payload };
    case "ADD_CART":
      return { ...state, cart: [...state.cart, action.payload] };
    case "DELETE_CART": //Lo dejo de tarea utilizar un .filter()
      return { ...state, cart: [] };
    default:
      throw new Error();
  }
};


const initialState = {
  recipes: [],
  cart: []
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
      // setRecipes(res.data.recipes);
      dispatch({ type: "GET_RECIPES", payload: res.data });
    });
  }, []);

  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(favs));
  }, [favs]);

  return (
    // <ContextGlobal.Provider value={{state, dispatch}}>
    //   {children}
    // </ContextGlobal.Provider>
    <RecipeStates.Provider value={{ state, dispatch, favs, setFavs }}>
      {children}
    </RecipeStates.Provider>
  );
};

export default Context;

export const useRecipeStates = () => useContext(RecipeStates);