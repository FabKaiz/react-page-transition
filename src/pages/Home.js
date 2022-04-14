/** @format */

import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/pizza.jpeg";
import "../styles/Home.css";
import { motion } from "framer-motion/dist/framer-motion";

function Home() {
  return (
    <motion.div
      className="home"
      style={{ backgroundImage: `url(${BannerImage})` }}
      inital={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="headerContainer">
        <h1> Pedro's Pizzeria </h1>
        <p> PIZZA TO FIT ANY TASTE</p>
        <Link to="/menu">
          <button> ORDER NOW </button>
        </Link>
      </div>
    </motion.div>
  );
}

export default Home;
