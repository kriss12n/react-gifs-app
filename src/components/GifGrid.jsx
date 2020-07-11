import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import GifGridItem from "./GifGridItem";

const GifGrid = ({ categories }) => {
  const { data, loading } = useFetchGifs(categories);

  return (
    <>
      <h3>{categories}</h3>
      {loading && <p>Loading...</p>}
      <div className="card-grid">
        {data.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};

export default GifGrid;
