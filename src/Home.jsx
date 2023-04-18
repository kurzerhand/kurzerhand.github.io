import React,{useState} from 'react';
import logo from './logo.svg';
import './Home.css';
import SearchBar from './SearchBar';
import PropertyList from './PropertyList';
import Banner from './Banner';

function Home() {

    

  return (
    <div>
      <nav>
        <div className="navbar-left">
          <img src={logo} alt="logo" />
        </div>
        <div className="navbar-right">
          
          <button>Iniciar Sesión</button>
        </div>
      </nav>
      <Banner/>
      <PropertyList/>
    </div>
  );
}

export default Home;
