import React from "react";

function Itemcontainer({ blogPosts }) {
  return (
    <div id="itemcontainer">
      {blogPosts.map((post) => (
        <div key={post.id} className="itemcard">
          <section className="imagesection">
            <img className="itemimg" src={post.image} alt="" />
          </section>
          <section className="textsection">
            <p className="title">{post.heading}</p>
            <section className="authorcontainer">
              <span className="author">
                {post.author}{" "}
                <b style={{ fontWeight: 500, color: "#000000" }}>|</b>
              </span>
              <span className="date"> {post.date}</span>
            </section>
            <section className="text">
              <p>{post.text}</p>
            </section>
          </section>
        </div>
      ))}
    </div>
  );
}

export default Itemcontainer;
