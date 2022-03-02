import React from "react";
import MainLayout from "../layout/MainLayout";
import Todos from "../components/Todos";

const Home = () => {
   return (
      <MainLayout>
         <Todos />
      </MainLayout>
   );
};

export default Home;
