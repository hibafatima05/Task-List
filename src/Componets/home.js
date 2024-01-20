import Booklisted from "./bookliset";
import useFetch from "./useFetch";

const Home = () => {
// const {data:books,loadMessage,isError}= useFetch("http://localhost:8000/books")
const {data:books,loadMessage,isError}= useFetch("https://65ab5c34fcd1c9dcffc64c7e.mockapi.io/booklist/books")

 return (
  <>
  
{isError&& <div>{isError}</div>}

{loadMessage && <div className="p-2 m-48 font-semibold text-xl ">"Displaying the BookList..."</div>}

{books&& <Booklisted books={books} title="Books-List" />} 


  </>  );
}
 
export default Home;