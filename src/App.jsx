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

  const [active, setActive] = useState({})

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Home albums={albums} setActive={setActive} active={active} />} /> */}
          <Route path="/" element={<Home albums={albums} active={active} />} />
          <Route path="/create" element={<Create setAlbums={setAlbums} />} />
          <Route path="/album" element={<Album />} />
        </Routes>
        {/* <Album album={active} /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
