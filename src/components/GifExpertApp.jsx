import React, { useState } from "react";
import AddCategory from "./AddCategory";
import GifGrid from "./GifGrid";

const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Naruto"]);

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      <ol>
        {categories.map((categorie) => (
          <GifGrid key={categorie} categories={categorie} />
        ))}
      </ol>
    </>
  );
};

export default GifExpertApp;
