import Booklist from "./booklist";
import useFetch from "./useFetch";

const Home = () => {
const {data:books,loadMessage,isError}= useFetch("http://localhost:8000/books")



  return (
  
  <>
  
{isError&& <div>{isError}</div>}

{loadMessage && <div className="p-2 m-48 font-semibold text-xl ">"Displaying the BookList..."</div>}

{books&& <Booklist books={books} title="Books-List" />} 

  </>  );
}
 
export default Home;