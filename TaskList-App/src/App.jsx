
import { Routes, Route } from "react-router-dom";
import NavBar from "./Routes/NavBar";
import Home from "./Routes/Home";
import Contacts from "./Routes/Contact";
import TASKMAIN from './Components/TaskMain'
import SubTask from './Components/SubTask'


const App = () => {
  return (

    <>

      <NavBar />
      <Routes>
        <Route path="/app" element={<TASKMAIN />} />
        <Route path="/app/:taskId" element={<SubTask />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contacts />} />



      </Routes>

    </>
  );
};

export default App;