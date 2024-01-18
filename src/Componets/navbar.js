import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';

const NavBar = () => {
  return ( 

<>
<div className = "flex justify-between bg-red-950 p-4">
<h1 className="font-bold text-2xl text-red-400 ml-22" >"Welcome to Book List Home-Page"</h1>
<Link to="/" className = "font-semibold  text-xl text-red-400 mr-10" > Home</Link>
<Link to="/create" className = "font-semibold  text-xl text-red-400 mr-10" > Add Books to list</Link>

</div>

</> 

 );
}
 
export default NavBar;