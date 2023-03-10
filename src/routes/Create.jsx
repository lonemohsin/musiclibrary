import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = ({ setAlbums }) => {
  const [album, setAlbum] = useState("");
  const [song, setSong] = useState("");
  const [artist, setArtist] = useState("");
  const [genre, setGenre] = useState("");
  const [image, setImage] = useState("");

  const nav = useNavigate();
  return (
    <div className="newAlbum">
      <h3 className="albumTitle">New Album</h3>

      <input className="albumText"
        value={album}
        onChange={(e) => setAlbum(e.target.value)}
        type="text"
        placeholder="Album name"
        name="albumName"
      />
      <input className="albumText"
        value={song}
        onChange={(e) => setSong(e.target.value)}
        type="text"
        placeholder="Song name"
        name="songName"
      />
      <input className="albumText"
        value={artist}
        onChange={(e) => setArtist(e.target.value)}
        type="text"
        placeholder="Artist name"
        name="songName"
      />
      <input className="albumText"
        value={genre}
        type="text"
        onChange={(e) => setGenre(e.target.value)}
        placeholder="Genre"
        name="genre"
      />
      <input className="albumText"
        type="text"
        onChange={(e) => setImage(e.target.value)}
        placeholder="Logo URL"
        name="albumLogo"
      />
      {/* <input type="file" accept="image" name="album-logo" /> */}
      <button
        type="submit"
        onClick={() => {
          setAlbums((pre) => [...pre, { title: album, song, artist, genre, image }]); 
          nav("/");
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default Create;
