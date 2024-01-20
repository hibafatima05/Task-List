import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BookDetails = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const{data:books,loadMessage,isError}=useFetch('https://65ab5c34fcd1c9dcffc64c7e.mockapi.io/booklist/books/' +id)

const handleDelete = ()=>{

  // fetch('http://localhost:8000/books/'+ books.id,{

  fetch('https://65ab5c34fcd1c9dcffc64c7e.mockapi.io/booklist/books/'+ books.id,{

    method:'DELETE'
    
  }).then(()=>{
    navigate('/');
  })
}
return (
  <>
<div>
{loadMessage && <div>Loading ...</div>}
{isError && <div>{isError}</div>}
{books &&(
    <div key={books.id}>
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