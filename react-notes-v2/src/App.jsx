import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NotesList from "./components/NotesList/notesList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="h-screen">
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl p-4 text-white text-left">React Notes V2</h1>
          <NotesList />
        </div>
      </div>
    </>
  );
}

export default App;
