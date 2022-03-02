import React from "react";
import { NavLink } from "react-router-dom";
import ListAltIcon from "@mui/icons-material/ListAlt";
import QueueIcon from "@mui/icons-material/Queue";

const activeStyle = ({ isActive }) => {
   return isActive
      ? "inline-block mx-4 text-primary/60  text-center cursor-default"
      : " hover:text-primary/50  inline-block mx-4 cursor-pointer  text-center ";
};

const NavBar = () => {
   return (
      <div className="h-16 drop-shadow-lg border-b border-gray-200 sticky top-0 left-0 z-100 w-screen flex justify-evenly items-center">
         <NavLink to="/" className={activeStyle}>
            <div className="gap-x-1 text-lg flex items-center">
               <ListAltIcon />
               Todos
            </div>
         </NavLink>
         <NavLink to="/add-new-todo" className={activeStyle}>
            <div className="gap-x-1 text-lg flex items-center">
               <QueueIcon />
               Add New Todo
            </div>
         </NavLink>
      </div>
   );
};

export default NavBar;
