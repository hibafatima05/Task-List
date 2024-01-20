import {useState } from "react";

  import { useNavigate } from "react-router-dom";

const CreateInput = () => {
  const[title,setTitle]= useState("");
  const[desc,setDesc] = useState("");
  const[author ,setAuthor] = useState("");
const[isPending,setIsPending] = useState(false);
const navigate = useNavigate()

const SubmitHandler = (e)=>{
e.preventDefault();
const books ={title,desc,author}

// fetch("http://localhost:8000/books",{
// fetch("https://my.api.mockaroo.com/books?key=fd6e0830",{
fetch ("https://65ab5c34fcd1c9dcffc64c7e.mockapi.io/booklist/books",{
  method: 'POST',
  headers:{"Content-Type": "application/json"},
  body:JSON.stringify(books)
}).then(()=>{
  setIsPending(false);
  console.log('new book added');
})
navigate('/');
}

  return (  
    <>
    <div className="submit-container">
      <h2> Add books</h2>

      <form onSubmit={SubmitHandler}>
    <label>Book-Title</label>
    <input type="text" required placeholder="Book Title" value={title}
    onChange={(e)=>{
      setTitle (e.target.value);
    }}
    />
    <label>Book-Description</label>
    <input type="text" required placeholder="Book Description" value={desc}
    onChange={(e)=>{
      setDesc(e.target.value);
    }}
    />
    <label>Author name</label>
    <input type="text" required placeholder="Author" value={author}
    onChange={(e)=>{
      setAuthor(e.target.value);
    }}
    />

{!isPending &&  <button className="bg-orange-500 p-3 ml-4">Add Book</button>}
{/* { isPending && <button className="bg-orange-500 p-3 ml-4" disabled>Adding Book....</button>} */}
{ isPending && <h3 className="bg-orange-500 p-3 ml-4">Adding Book....</h3>}



      </form>
      </div>   
      
       </>
  );
}
 
export default CreateInput;