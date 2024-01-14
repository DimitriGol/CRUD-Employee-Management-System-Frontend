import './stylesheet/App.css'
import Home from './components/Home.tsx';
import AddEmployee from './components/AddEmployee.tsx';
import ErrorPage from './components/ErrorPage.tsx';
import Nav from './components/Nav.tsx';

import { HashRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
            <Route path='/' element={<Home />} />
            {/* Employee Routes */}
            <Route path='add-employee' element={<AddEmployee />} />
            {/* <Route path="employee" element={<SingleEmployeeView />} /> */}
            <Route path='*' element={<ErrorPage />} />
          </Routes>
      </div>
    </Router>
  );
};

export default App
