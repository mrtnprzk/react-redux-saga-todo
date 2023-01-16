import React from "react";

const Todo = ({ name, description }) => {
  return (
    <div className="bg-yellow-200 flex flex-col items-center border border-yellow-400 rounded shadow-lg">
      <h3 className="text-xl text-slate-800 font-bold px-5 py-2">{name}</h3>
      <p className="w-full text-slate-700 font-semibold p-5 border-t border-yellow-400">{description}</p>
    </div>
  );
};

export default Todo;
