import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BookDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: books, loadMessage, isError } = useFetch('https://65f6a84541d90c1c5e0b194c.mockapi.io/booklist/' + id)

  const handleDelete = () => {


    fetch('https://65f6a84541d90c1c5e0b194c.mockapi.io/booklist/' + books.id, {

      method: 'DELETE'

    }).then(() => {
      navigate('/');
    })
  }
  return (
    <>
      <div>
        {loadMessage && <div>Loading ...</div>}
        {isError && <div>{isError}</div>}
        {books && (
          <div className="book-description" key={books.id}>
            <article>
              <h2>Title : {books.title}</h2>
              <h3>Description :{books.desc}</h3>
              <h3>Author : {books.author}</h3>
              <button onClick={
                handleDelete
              }>Delete</button>
            </article>
          </div>
        )}
      </div>
    </>
  );
}

export default BookDetails;