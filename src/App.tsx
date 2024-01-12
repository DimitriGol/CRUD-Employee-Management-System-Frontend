import './stylesheet/App.css'
import Home from './components/Home.tsx';
import AddEmployee from './components/AddEmployee.tsx';

import { HashRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  
  return (
    <>
    <Router>
    <Routes>
        <Route path="/" element={<Home />} />
        {/* Employee Routes */}
        <Route path="add-employee" element={<AddEmployee />} />
        {/* <Route path="employee" element={<SingleEmployeeView />} /> */}
        {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </Router>
    
    </>
  );
};

export default App
