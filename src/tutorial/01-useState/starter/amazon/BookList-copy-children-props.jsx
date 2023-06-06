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
      <section className="container">
        <div>
          <Book
            img={bookItem[0].img}
            title={bookItem[0].title}
            author={bookItem[0].author}
          >
            {/* Pass children in between closing and opening bracket of component. Here description in p tag for first book component send. this is children props and accessed in book component */}
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
              dolorem distinctio pariatur molestias, nesciunt ullam temporibus,
              minima veritatis aliquid velit harum! Dolor excepturi, eaque quasi
              soluta molestiae quis asperiores non eos recusandae odio deserunt
              fugiat commodi culpa voluptatem aliquid minus harum necessitatibus
              sunt consectetur. Commodi cupiditate quae mollitia voluptas dolor.
            </p>
          </Book>
        </div>
        <div>
          <Book
            img={bookItem[1].img}
            title={bookItem[1].title}
            author={bookItem[1].author}
          />
        </div>
      </section>
    </>
  );
};

export default BookList;
