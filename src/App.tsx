import './stylesheet/App.css'
import { Home } from './components/Home.tsx';

import { HashRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  
  return (
    <>
    <Router>
    <Routes>
        <Route path="/" element={<Home />} />

        {/* Employee Routes */}
        {/* <Route path="add-employee" element={<AddEmployee />} /> */}
        {/* <Route path="employee" element={<SingleEmployeeView />} /> */}
        {/* <Route path="contact" element={<Contact />} /> */}
        {/* <Route path="*" element={<NoPage />} /> */}

      </Routes>
    </Router>
    
    <Home/>
    </>
  )
}

export default App
