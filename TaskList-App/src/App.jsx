import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Routes/NavBar";
import Home from "./Routes/Home";
import Contacts from "./Routes/Contact";

// import NavBar from "./Components/Routes/Navbar";
// import Todo from "./Components/Todo/Todo";
// import Home from "./Components/Routes/Home";
// import Contacts from "./Components/Routes/Contact";
// import TaskDetails from "./Components/Todo/TaskDetails";
const App = () => {
  return (
    
      <>
   APPpage
   <NavBar/>
   <Routes>
    <Route path="/app" element= {<TASKMAIN/>}/>
    <Route path="/app/:taskID" element= {<SubTask/>}/>
    <Route path="/home" element= {<Home/>}/>
    <Route path="/contact" element= {<Contacts/>}/>

   

   </Routes>
   
    </>
  );
};

export default App;