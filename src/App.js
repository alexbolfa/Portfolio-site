import Navbar from "./components/Navbar";
import "./styles.css"
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home"
import About from "./pages/About"
import PageNotFound from "./pages/PageNotFound"
import Contact from "./pages/Contact"

function App() {
  return (
      <>
          <Navbar />
          <div className="container">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<PageNotFound />} />
              </Routes>
          </div>
      </>
  );
}

export default App;
