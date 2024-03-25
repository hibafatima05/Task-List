import './NavBar.css'
import { Link,useParams } from 'react-router-dom';
const NavBar = () => {
  const{id} = useParams();
  return (
    <>
    <h1>Task - Manager</h1>
    <section>
      <nav>
        <ul className="menuItems">
          <li>
        <Link to={`/home`}>Home
          </Link> </li>
          
          <li>
          <Link to='contact'>Contacts
          </Link>
          </li>
          <li>
          <Link to='app'>APP
          </Link>
          </li>
          
           
        </ul>
      </nav>
    </section>
    </>
    );
}
 
export default NavBar;

