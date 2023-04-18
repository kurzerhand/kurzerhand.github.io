import React from "react";
import "./Banner.css";
import SearchBar from "./SearchBar";
import backgroundImage from "./imagen4kFondo.jpg";

function Banner() {
  const bannerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div className="banner" style={bannerStyle}>
      <div className="banner-content">
        <h1>IdealHouse</h1>
        <p>Encuentra el hogar de tus sueños en segundos</p>
        <SearchBar />
      </div>
      <div className="search-options">
        <button className="btn-map">Buscar por mapa</button>
        <button className="btn-filter">Filtrar</button>
        <button className="btn-sort">Ordenar</button>
      </div>
    </div>
  );
}

export default Banner;

