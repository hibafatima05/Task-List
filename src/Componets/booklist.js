import { Link } from "react-router-dom";

const Booklist = ({books,title}) => {
 
  return (
    <>
    <div className="border-spacing-2 border-solid border-red-600">
<h1 className="font-bold text-3xl flex underline mt-3 mb-2 p-4 

bg-rose-500 justify-around ">{title}</h1>

    {books.map((book)=>(
  
  <div className="flex-1  bg-rose-300"  key={book.id}>
    <Link to={`/books/${book.id}`}>                       
    <h2 className="font-bold text-2xl p-3 ml-56 mt-3 inline-flex text-center justify-center bg-rose-400 ">{book.title}</h2>
   </Link>

  <h4 className="font-bold text-xl p-3  block  ml-36">{book.desc}</h4>
  <div className="font-semibold text-xl p-2 ml-64 mt-4 mb-3"><h5>"{book.author}"</h5>
    </div>
  {/* <button className="font-semibold text-xl bg-red-600 p-4 rounded mt-2"
  onClick={()=>{deleteHandler(book.id)}}>Delete</button> */}
  </div>))}
  
    </div>
    </>
    );
}
 
export default Booklist;