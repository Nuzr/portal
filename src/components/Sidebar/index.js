import React from "react";
import "./index.scss";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="box">
      <div className="sidebar">
        <div className="menu-box">
          <Link to={"/"}>
            <div>
              <img src="/images/smart-home.svg" alt="" />
            </div>
          </Link>
          <Link to={"/"}>
            <div>
              <img src="/images/layer.svg" alt="" />
            </div>
          </Link>
          <Link to={"/"}>
            <div>
              <img src="/images/bookmark.svg" alt="" />
            </div>
          </Link>
         <Link to={"/"}>
         <div>
            <img src="/images/grid-7.svg" alt="" />
          </div>
          </Link> 
          <Link to={"/"}>
          <div>
            <img src="/images/folder.svg" alt="" />
          </div>
          </Link>
         <Link to={"/"}> 
         <div>
            <img src="/images/notification.svg" alt="" />
          </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
