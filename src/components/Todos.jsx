import { useState, useEffect } from "react";
import Todo from "./Todo";
import axios from "axios";

const Todos = () => {
   const [todos, setTodos] = useState([]);
   const [isLoading, setIsLoading] = useState(false);

   useEffect(() => {
      setIsLoading(true);

      async function fetchTodos() {
         try {
            const response = await axios.get("http://localhost:5001/todos");
            setTodos(response.data);
            console.log(response);
            setIsLoading(false);
         } catch (err) {
            console.log(err);
            setIsLoading(false);
         }
      }

      setTimeout(() => {
         fetchTodos();
      }, 300);
   }, []);

   if (isLoading) {
      return <div className="text-center">Loading...</div>;
   }
   return (
      <div className="flex flex-col gap-y-4">
         {todos.map((item, index) => (
            <Todo todo={item.todo} key={index} />
         ))}
      </div>
   );
};

export default Todos;
