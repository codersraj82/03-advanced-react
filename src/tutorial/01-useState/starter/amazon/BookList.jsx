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
    id: 3,
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
          return <Book key={element.id} {...element}></Book>;
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
  const { img, title, author } = props;

  // attribute and Event handler
  //onClick and buttonHandler for More info button
  const moreInfoButtonHandler = () => {
    alert(`Best seller book with most sold online
    ${title}
    ${author}
    `);
  };

  const functionInvokeHandler = (element) => {
    console.log(element);
  };
  return (
    <>
      {/* onMouseOver */}
      <article className="book" onMouseOver={() => console.log(title)}>
        <img src={img} alt="" srcSet="" />
        {/* Event handler function called as inline function */}
        <h4 onClick={() => console.log(title)}>{title}</h4>
        <h6> {author}</h6>
        {/* Event handler function called by reference i.e. by name only */}
        <button type="button" onClick={moreInfoButtonHandler}>
          More info...
        </button>
        {/* Event handler function called by invoking and need to wrap in inline function to avoid invoked on rendering instead of on event */}
        <button onClick={() => functionInvokeHandler(author)}>
          Funtion invoke
        </button>
      </article>
    </>
  );
};
export default BookList;
