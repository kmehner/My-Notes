import React from "react";
import {Routes, Route} from 'react-router-dom';

import Header from "./components/Header";
import NotesPage from "./pages/NotesPage";
import NotePage from './pages/NotePage'

import './App.css';

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route element={<NotesPage/>} path="/" /> 
        <Route element={<NotePage/>} path="/note/:id" /> // added a dynamic parameter
      </Routes>
    </div>

  );
}

export default App;
