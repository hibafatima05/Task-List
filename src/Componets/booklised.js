import { Link } from "react-router-dom";

const Booklisted = ({ books, title }) => {
  
  const bookArray = Array.isArray(books) ? books : [books];

  return (
    <>
      <div className="book-container">
        <h1>{title}</h1>

        {bookArray.map((bookItem) => (
          <div className="book-details" key={bookItem.id.toString()}>
            <Link to={`/books/${bookItem.id}`}>
              <h2 >{bookItem.title}</h2>
            </Link>
            <h4 >{bookItem.desc}</h4>
            <div >
              <h5>"{bookItem.author}"</h5>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Booklisted;
