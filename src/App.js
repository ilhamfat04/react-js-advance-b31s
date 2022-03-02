import "bootstrap/dist/css/bootstrap.min.css";

// import necessary object from react-router-dom
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

// import "pages" component here
import About from './pages/About'
import Home from './pages/Home'
import Profile from './pages/Profile'
import SignIn from './pages/SignIn'

function App() {
  return (
    // define <BrowserRouter> as parent element
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/" >Home</Link>
            </li>
            <li>
              <Link to="/about" >About</Link>
            </li>
            <li>
              <Link to="/profile" >Profile</Link>
            </li>
            <li>
              <Link to="/signin" >Sign In</Link>
            </li>
          </ul>
        </nav>
      </div>
      {/* code <Routes> and <Route> below, according to path and component */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </Router>
  );
}

export default App;