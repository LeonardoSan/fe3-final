
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Fav from "./Routes/Favs";
import Detail from "./Routes/Detail";
import { routes } from "./Components/utils/routes";
import { useContextGlobal } from './Components/utils/global.context';



function App() {
  const { theme } = useContextGlobal();
  console.log('tema:', theme);
  return (
      <div className={theme}>
          <Navbar/>
          <Routes>
            <Route path={routes.home} element={<Home />} />
            <Route path={routes.contact} element={<Contact />} />
            <Route path={routes.favs} element={<Fav />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route
              path={routes.notFound}
              element={<h1>Error 404 - Page not Found</h1>}
            />
          </Routes>
          <Footer/>
      </div>
  );
}

export default App;
