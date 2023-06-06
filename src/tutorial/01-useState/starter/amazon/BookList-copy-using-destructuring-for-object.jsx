import React from "react";
//import Book from "book";

//import Book from "./book";
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
  {
    id: 2,
    img: "https://m.media-amazon.com/images/I/81zz6LqCreS._AC_UY218_.jpg",
    title:
      "How to Stop Worrying and Start Living: Time-Tested Methods for Conquering Worry",
    author: "by Dale Carnegie",
  },
];

const BookList = () => {
  return (
    <>
      <section className="booklist">
        {bookItem.map((element) => {
          {
            /* element is an object hence destructre it and pass it as seperate props

          {
            /*const { img, title, author } = element; 
            
             return <Book img={img} title={title} author={author}></Book>;
             */
          }

          {
            /* Now here element is a object and can be pass directly */
          }
          return <Book key={element.id} book={element}></Book>;
          {
            /* here key props used as per need separate id to each component in react */
          }
          {
            /* Now in this method need treat props as object in Book component */
          }
        })}
      </section>
    </>
  );
};

const Book = (props) => {
  const { img, title, author } = props.book;
  // here props is propeties containing object. Hence props.book is needed to pass instead of props for destructuring.
  return (
    <>
      <article className="book">
        <img src={img} alt="" srcset="" />
        <h4>{title}</h4>
        <h6> {author}</h6>
      </article>
    </>
  );
};
export default BookList;
