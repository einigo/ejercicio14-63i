import { BrowserRouter, Route, Routes } from "react-router-dom";

import AdminView from "./views/adminView";
import DetailView from "./views/DetailView";
import ErrorView from "./views/ErrorView";
import HomeView from "./views/HomeView";
import LoginView from "./views/LoginView";

import Footer from "./components/Common/Footer";
import Navbar from "./components/Common/Navbar";


const Router = () => {

  return (
    <BrowserRouter>
      {/* <BrowserRouter/> → Conecta nuestra aplicación a la URL del navegador, */}
      <Navbar />
      <main className="container py-5">
        <Routes>
          {/* Routes funciona como un swich va a decidir en que ruta estamos parados */}
          <Route path="/" element={<HomeView/>} />
          {/* Route: hace alucion a una ruta en particular.
     path: el destino de la ruta en este caso / que es el home.
     element: poner el componente que realmente va hacer eso.
     */}
          <Route path="/detail" element={<DetailView/>} />
          <Route
            path="/login"
            element= {<LoginView/>}
          />
          <Route
            path="/admin"
            element={<AdminView/>}
          />
          <Route path="*" element={<ErrorView/>} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default Router; 