import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CollegeHomepage from "./components/CollegeHomepage";
import Login from "./components/ui/Login";
import Grievances from "./components/ui/Grievances";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CollegeHomepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/grievances" element={<Grievances />} />
      </Routes>
    </Router>
  );
}

export default App;
