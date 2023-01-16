import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import NotesList from "./pages/NotesList/NotesList";
import AddNewNote from "./pages/AddNewNote/AddNewNote";

function App() {
  return (
    <main className="bg-yellow-100 min-h-screen">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<NotesList />} />
          <Route path="/add" element={<AddNewNote />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
