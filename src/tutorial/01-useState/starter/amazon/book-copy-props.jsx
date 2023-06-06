// import React, { Component } from "react";
import React from "react";

const bookData = (img, title, author) => {
  return (
    <div className="bookItem">
      <img src={img} alt="" srcset="" />
      <h4>{title}</h4>
      <h6> {author}</h6>
    </div>
  );
};

const Book = (props) => {
  return (
    <>
      <article>
        <img src={props.img} alt="" srcset="" />
        <h4>{props.title}</h4>
        <h6> {props.author}</h6>
      </article>
    </>
  );
};

export default Book;
