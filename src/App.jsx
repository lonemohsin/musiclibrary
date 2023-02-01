import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./routes/Home";
import Create from "./routes/Create";
import Album from "./routes/Album";

function App() {
  const [albums, setAlbums] = useState([
    { title: "Album 1" },
    { title: "Album 2" },
    { title: "Album 3" },
  ]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home albums={albums} />} />
          <Route path="/create" element={<Create setAlbums={setAlbums} />} />
          <Route path="/album" element={<Album />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
