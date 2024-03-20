import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './navbar.css'
const NavBar = () => {
  return ( 

<>
<div className = "headertab">
<h1 className="headertitle" >"Welcome to Book List Home-Page"</h1>
<div className = "nav-links"><Link to="/"  > Home</Link>
<Link to="/create" > Add Books to list</Link>  </div>


</div>

</> 

 );
}
 
export default NavBar;