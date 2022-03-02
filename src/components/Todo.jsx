import React from "react";

const Todo = (props) => {
   return (
      <div className=" p-6 bg-primary/10 border-l-4 border-primary/90">
         {props.todo}
      </div>
   );
};

export default Todo;
