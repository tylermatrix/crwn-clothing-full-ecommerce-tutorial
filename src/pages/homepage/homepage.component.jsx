import React from "react";
import "./homepages.styles.scss";
import Directory from "../../components/directory/directory.component";
import MenuItem from "../../components/menu-item/menu-item.component";
import { Link } from "react-router-dom";

const Homepage = () => (
  <div className="homepage">
    <Directory />
    <Link to="/topics"></Link>
  </div>
);

export default Homepage;
