import Home from "./Componets/home";
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from "./Componets/navbar";
import BookDetails from "./Componets/BookDetails";
import CreateInput from "./Componets/CreateInput";


const App = () => {
  return (
    <Router>
      <NavBar />

      <Routes>
         <Route exact path="/" element={<Home />} />
        <Route path="/create" element={<CreateInput/>} />
        <Route path="/books/:id" element={<BookDetails/>} /> 
        
         </Routes>
         
    </Router>

  );
}

export default App;