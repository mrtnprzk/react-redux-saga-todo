import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Todo from "../../components/Todo";
import { initGetListData } from "./store/actions";

const NotesList = () => {
  const { notesList, isNotesDataFetching, isNotesDataFetchingFailed } =
    useSelector((state) => state.NotesListReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initGetListData());
  }, [dispatch]);

  if (isNotesDataFetching)
    return <p className="text-3xl text-center font-bold pt-20">Loading...</p>;

  if (isNotesDataFetchingFailed)
    return (
      <p className="text-3xl text-red-600 text-center font-bold pt-20">
        Failed!
      </p>
    );

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-bold my-8">Notes List</h1>
      <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {notesList.map(({ id, name }) => (
          <Todo
            key={id}
            name={name}
            description={"This is DUMMY Description"}
          />
        ))}
      </div>
    </div>
  );
};

export default NotesList;
