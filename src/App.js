import Contact from './components/Contact';
import Home from './Home';

import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Routes>
      <Route path="/" element = {<Home /> }></Route>

      <Route exact path="/contact" element = {<Contact />} ></Route>
    </Routes>
  );
}
