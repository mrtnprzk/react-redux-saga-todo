import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { initSaveNotesValue, saveNotesValueSuccessful } from "./store/actions";

const AddNewNote = () => {
  const [notesName, setNotesName] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { success } = useSelector((state) => state.AddNotesReducer);

  const onChangeHandler = (e) => {
    setNotesName(e.target.value);
  };

  const handleClick = () => {
    dispatch(initSaveNotesValue(notesName));
  };

  useEffect(() => {
    if (success === true) {
      setNotesName("");
      navigate("/");
      dispatch(saveNotesValueSuccessful(false));
    }
  }, [success, navigate, dispatch]);

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-bold my-8">Add New Note</h1>
      <div className="flex space-x-2">
        <input
          name="addTodo"
          placeholder="Enter Todo Name"
          className="bg-white px-4 py-2 rounded-lg shadow-lg border border-yellow-500 focus:outline-yellow-600 duration-700"
          value={notesName}
          onChange={onChangeHandler}
        />
        <button
          disabled={!notesName}
          onClick={handleClick}
          className={`bg-yellow-600 text-white rounded-lg px-4 py-1 border border-yellow-600 duration-500 ${
            !notesName ? "opacity-50" : "hover:bg-yellow-500"
          }`}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default AddNewNote;
