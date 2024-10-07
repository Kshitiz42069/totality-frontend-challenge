import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Explore from "./components/Explore/Explore";
import Login from "./components/Auth/Login";

function App() {
  return (
    <Router>
    <div className="App bg-black relative">
      <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar/>
                <Home/>
                <Footer/>
              </>
            }
          />
          <Route
            path="/explore"
            element={
              <>
                <Navbar/>
                <Explore/>
                <Footer/>
              </>
            }
          />
          <Route
            path="/login"
            element={
              <>
                <Navbar/>
                <Login/>
                <Footer/>
              </>
            }
          />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
