import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = ({ setAlbums }) => {
  const [name, setName] = useState("");
  const [artist, setArtist] = useState("");
  const [genre, setGenre] = useState("");
  const [image, setImage] = useState("");

  const nav = useNavigate();
  return (
    <div className="new-album">
      <h3>New Album</h3>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="Album name"
        name="albumName"
      />
      <input
        value={artist}
        onChange={(e) => setArtist(e.target.value)}
        type="text"
        placeholder="Artist name"
        name="songName"
      />
      <input
        value={genre}
        type="text"
        onChange={(e) => setGenre(e.target.value)}
        placeholder="Genre"
        name="genre"
      />
      <input
        type="text"
        onChange={(e) => setImage(e.target.value)}
        placeholder="Logo URL"
        name="albumLogo"
      />
      {/* <input type="file" accept="image" name="album-logo" /> */}
      <button
        type="submit"
        onClick={() => {
          setAlbums((pre) => [...pre, { title: name }]);
          nav("/");
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default Create;
