import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

// import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import SearchApi from "./component/SearchApi";
// import { GetAPI } from './component/GetAPI'


const App=() => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<SearchApi/>} />
      </Routes>
    </Router>
  )
}

export default App
