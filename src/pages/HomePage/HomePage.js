import React, { useState } from "react";
import "../../App.css";
import "../../styles/home.css";
import NavBar from "../components/NavBar";
import EarthBackground from "../../img/bg1.mp4";
import ImagePreview from "./ImagePreview";

export default function HomePage({ items }) {
  const [search, setSearch] = useState("");
  const [photos, setPhotos] = useState(items);

  return (
    <>
      <div className="Home">
        <video className="Video_Background" autoPlay loop muted>
          <source src={EarthBackground} type="video/mp4" />
        </video>
        <div className="home">
          <NavBar />
          <div className="body"></div>
          <div className="jumbotron">
            <h1 className="TitleHome">Hello, earthlings!</h1>
            <p className="PHome">Here you can find photos of the planets and galaxies!</p>
            <input
              className="SearchBarHome me-4"
              id="nasaSearch"
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="Search for an image"
            ></input>
            <button
              className="btn btn-transaprent text-white py-2 px-4"
              disabled={search === ""}
              onClick={async () => {
                const results = await fetch(
                  `https://images-api.nasa.gov/search?media_type=image&q=${search}`
                );
                const previews = await results.json();
                setPhotos(await previews.collection.items);
              }}
            >
              Search
            </button>
            <div>
              <div className="d-flex justify-content-center flex-wrap mx-auto">
                {photos &&
                  photos.map((preview) => (
                    <ImagePreview
                      key={preview.data[0].title}
                      nasaPicture={preview.links[0].href}
                      title={preview.data[0].title}
                      description={preview.data[0].description}
                    />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
