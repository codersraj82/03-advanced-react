import React from "react";
//import Book from "book";

import Book from "./book";
import "./style.css";
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

// iterating an array to create multiple component using array.map() method to wrap in HTML
const name = ["serhan", "sofiya", "azlan"];
const newName = name.map((element) => {
  return <h1>{element}</h1>;
});
const BookList = () => {
  return (
    <>
      {/* Below way uses declaring itterating array in seperate decleared variable Here newName decleared above */}
      {/* <section className="container">{newName}</section> */}

      {/* Another below direct method for itterating an array for wrapping element into HTML */}
      <section>
        {name.map((element) => {
          return <h1>{element}</h1>;
        })}
      </section>
    </>
  );
};

export default BookList;
