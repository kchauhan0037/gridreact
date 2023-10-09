import React from "react";

function Categoriescontainer({ categories }) {
  return (
    <div id="categoriescontainer">
      <h1 id="heading">Latest posts</h1>
      <br />
      <i className="fa-solid fa-filter" style={{ color: "#4f76ba" }}></i>
      <span id="filtertext">Filter by Category</span>
      <br />
      {categories.map((category, index) => (
        <button key={index} className="catgbtn">
          {category}
        </button>
      ))}
    </div>
  );
}

export default Categoriescontainer;
