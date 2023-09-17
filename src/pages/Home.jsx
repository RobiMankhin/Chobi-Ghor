import React from "react";
import { Link } from "react-router-dom";
import "../STYLES/Home.css";
import BannerImage from "../assets/home.jpg";

export default function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1>CHobi-Ghor</h1>
        <p>Niker aaka chobi</p>
        <Link to="/menu">
          <button>Order Now</button>
        </Link>
      </div>
    </div>
  );
}
