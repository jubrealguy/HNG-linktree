import Contact from './components/Contact';
import Home from './Home';

import { HashRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div>
      <HashRouter basename='/'>
        <Routes>
          <Route path="/" element = {<Home /> }></Route>

          <Route exact path="/contact" element = {<Contact />} ></Route>
        </Routes>
      </HashRouter>
    </div>
  );
}
