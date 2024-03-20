import Booklisted from "./booklised";
import useFetch from "./useFetch";

const Home = () => {
const {data:books,loadMessage,isError}= useFetch("https://65f6a84541d90c1c5e0b194c.mockapi.io/booklist")

 return (
  <>
  
{isError&& <div>{isError}</div>}

{loadMessage && <div style={{fontSize:"23px"}}>"Displaying the BookList..."</div>}

{books&& <Booklisted books={books} title="Books-List" />} 


  </>  );
}
 
export default Home;