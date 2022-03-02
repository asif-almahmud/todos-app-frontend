import React from "react";
import NavBar from "../components/NavBar";

const MainLayout = ({ children }) => {
   return (
      <div className="text-primary bg-light min-h-screen flex flex-col ">
         <NavBar />
         <div className="p-4 py-8 w-11/12 sm:w-3/4 md:w-2/3 mx-auto grow flex flex-col">
            {children}
         </div>
      </div>
   );
};

export default MainLayout;
