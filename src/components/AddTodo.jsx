import { useState } from "react";
import axios from "axios";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate } from "react-router-dom";

const AddTodo = () => {
   const [newTodo, setNewTodo] = useState("");
   const [successMsg, setSuccessMsg] = useState(false);
   const navigate = useNavigate();

   async function addTodo(todo) {
      setNewTodo("");
      try {
         const response = await axios.post("http://localhost:5001/todos", {
            todo,
         });
         if (response.status === 201) {
            setSuccessMsg(true);
            setTimeout(() => {
               setSuccessMsg(false);
            }, 1000);
         }

         console.log(response);
      } catch (e) {
         console.log(e);
      }
   }

   const handleChange = (e) => {
      setNewTodo(e.target.value);
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      addTodo(newTodo);
   };

   return (
      <div className="grow flex items-center justify-center mb-52 ">
         <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-center items-center gap-y-4 relative"
         >
            {successMsg && (
               <div className="absolute -top-8 text-green-600 ">
                  New Todo Added
               </div>
            )}
            <label>
               New Todo :&nbsp;
               <input
                  required
                  type="text"
                  value={newTodo}
                  placeholder="New todo"
                  onChange={handleChange}
                  className="w-full h-8 pl-2 border border-dark/30 rounded focus:outline-primary"
               />
            </label>
            <input
               type="submit"
               value="Add"
               className="w-full h-8 px-4 bg-primary text-light rounded cursor-pointer active:bg-primary/80"
            />
            <div
               className="m-4 w-8 h-8 p-1 border border-primary rounded-full cursor-pointer flex justify-center items-center relative hover:bg-primary hover:text-light"
               onClick={() => {
                  navigate("/");
               }}
            >
               <ArrowBackIosIcon
                  fontSize="small"
                  className="absolute left-[7px] "
               />
            </div>
         </form>
      </div>
   );
};

export default AddTodo;
