import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CollegeHomepage from "./components/CollegeHomepage";
import Login from "./components/ui/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CollegeHomepage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
