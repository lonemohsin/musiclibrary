import React from "react";
import { useNavigate } from "react-router-dom";

// const handleAdd = () => {
//   setAlbums((prev) => {
//     return [...prev, { title: newAlbum }];
//   });
// };

function Home({ albums }) {
  const nav = useNavigate();
  return (
    <div>
      <h2>Music Library</h2>
      {albums.map((album) => (
        <p>{album.title}</p>
      ))}
      <button
        onClick={() => {
          nav("/create");
        }}
      >
        Add new Album
      </button>
    </div>
  );
}

export default Home;
