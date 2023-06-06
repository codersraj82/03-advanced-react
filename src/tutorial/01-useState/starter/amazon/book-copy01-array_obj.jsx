// import React, { Component } from "react";
import React from "react";
import "./style.css";
const Book = () => {
  const img = "https://m.media-amazon.com/images/I/91ASZ36n0SL._AC_UY218_.jpg";
  const title =
    " Lighter: Let Go of the Past, Connect with the Present, and Expand the Future";
  const author = "by Yung Pueblo";
  const bookItem = [
    {
      id: 1,
      img: "https://m.media-amazon.com/images/I/91ASZ36n0SL._AC_UY218_.jpg",
      title:
        " Lighter: Let Go of the Past, Connect with the Present, and Expand the Future",
      author: "by Yung Pueblo",
    },
    {
      id: 2,
      img: "https://m.media-amazon.com/images/I/813ExjDkhxS._AC_UY218_.jpg",
      title: "Relativity: The Special And The General Theory",
      author: "by Albert Einstein",
    },
  ];
  const bookData = (img, title, author) => {
    return (
      <div className="bookItem">
        <img src={img} alt="" srcset="" />
        <h4>{title}</h4>
        <h6> {author}</h6>
      </div>
    );
  };
  return (
    <>
      <article className="container">
        {bookData(bookItem[0].img, bookItem[0].title, bookItem[0].author)}
        {bookData(bookItem[1].img, bookItem[1].title, bookItem[1].author)}
      </article>
    </>
  );
};

export default Book;
