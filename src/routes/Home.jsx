import React from "react";
import { useNavigate } from "react-router-dom";

function Home({ albums, setActive, active }) {
  const nav = useNavigate();
  return (
    <div className="home">
      <h2 className="homeTitle">Music Library</h2>
      <div className="albums">
        {albums.map((album) => (
          <div className="album" onClick={() => {
            // setActive(album);
            nav("/album");
          }
          }>{album.title}</div>
        ))}
        <button className="addButton"
          onClick={() => {
            nav("/create");
          }}
        >
          Add new Album
        </button>
      </div>
    </div >
  );
}

export default Home;
