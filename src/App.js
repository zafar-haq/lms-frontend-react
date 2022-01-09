import './App.css';

import AdminLogin from './components/admin/AdminLogin';
import AppBarAdmin from './components/admin/AppBarAdmin';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'
import AdminDashboard from './components/admin/AdminDashboard';
import AdminViewStudents from './components/admin/AdminViewStudents'
import AdminViewClasses from './components/admin/AdminViewClasses'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/view" element={<AppBarAdmin />}> 
            <Route path="dashboard" element={<AdminDashboard />}/>
            <Route path="students" element={<AdminViewStudents />}/>
            <Route path="classes" element={<AdminViewClasses />}/>
            <Route path="logout" element={<AdminDashboard />}/>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App