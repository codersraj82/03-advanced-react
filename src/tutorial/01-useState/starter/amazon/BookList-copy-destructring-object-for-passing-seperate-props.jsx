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

const BookList = () => {
  return (
    <>
      <section>
        {bookItem.map((element) => {
          {
            /* element is an object hence destructre it and pass it as seperate props

          {
            /*const { img, title, author } = element; 
            
             return <Book img={img} title={title} author={author}></Book>;
             */
          }
          const { img, title, author } = element;

          return <Book img={img} title={title} author={author}></Book>;

          {
            /* Now here element is a object and can be pass directly */
          }
        })}
      </section>
    </>
  );
};

export default BookList;
