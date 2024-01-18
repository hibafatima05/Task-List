import React, { useState } from "react"

const Form = () => {
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("");
  const [booklist, setBookList] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setTitle("");
    setDesc("");

    setBookList([...booklist, { title, desc }])
    console.log(booklist);

  }
  // const deleteList = (i)=>{
  // let copytask = [...booklist]
  // copytask.splice(i,1)
  // setBookList(copytask);
  // }
  // const deleteList = (id) => {
  //   let copyTask = booklist.filter(book => book.id !== id);
  //   setBookList(copyTask)

  // }

  let renderTask = "No bookList";
  if (booklist.length > 0) {
    renderTask = booklist.map((t, id) => {
      return (<li key={id}>
        <div className="display-booklist">
          <h2>{t.title}
          </h2>
          <h3> {t.desc} </h3>
          <button className="delete-btn"
            onClick={"" }
          >Delete</button>
        </div>
      </li>)
    })
  }


  return (
    <>
      <div className="Form-container">
        <form onSubmit={submitHandler}>
          <input type="text" placeholder="Enter Book Title" value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <input type="text" placeholder="Add Description" onChange={(e) => {
            setDesc(e.target.value);
          }} value={desc} />

          <button >ADD-BOOK-TO LIST</button>
        </form>
      </div>
      <hr />
      <ul >

        {renderTask}

      </ul>


    </>
  );

}
export default Form;