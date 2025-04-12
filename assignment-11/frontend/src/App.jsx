import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Hobbies from './hobbies';
import Personal from './Personal';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Personal Info</Link>
          <Link to="/">Hobbies</Link>
        </nav>
        <Routes>
          <Route path="/personal" element={<Personal />} />
          <Route path="/hobbies" element={<Hobbies />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;