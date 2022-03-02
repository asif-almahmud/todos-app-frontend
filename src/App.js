import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddNewTodo from "./pages/AddNewTodo";

const App = () => {
   return (
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="add-new-todo" element={<AddNewTodo />} />
      </Routes>
   );
};

export default App;
