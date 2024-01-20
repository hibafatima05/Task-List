import { Link } from "react-router-dom";

const Booklisted = ({ books, title }) => {
  
  const bookArray = Array.isArray(books) ? books : [books];

  return (
    <>
      <div className="border-spacing-2 border-solid border-red-600">
        <h1 className="font-bold text-3xl flex underline mt-3 mb-2 p-4 bg-rose-500 justify-around">{title}</h1>

        {bookArray.map((bookItem) => (
          <div className="flex-1 bg-rose-300" key={bookItem.id.toString()}>
            <Link to={`/books/${bookItem.id}`}>
              <h2 className="font-bold text-2xl p-3 ml-56 mt-3 inline-flex text-center justify-center bg-rose-400 underline">{bookItem.title}</h2>
            </Link>
            <h4 className="font-bold text-xl p-3 block ml-52 mt-4">{bookItem.desc}</h4>
            <div className="font-semibold text-xl p-2 ml-64 mt-4 mb-3">
              <h5>"{bookItem.author}"</h5>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Booklisted;
