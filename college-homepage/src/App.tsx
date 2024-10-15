import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CollegeHomepage from './components/CollegeHomepage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CollegeHomepage />} />
      </Routes>
    </Router>
  );
}

export default App;