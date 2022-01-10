import './App.css';

import AdminLogin from './components/admin/AdminLogin';
import AppBarAdmin from './components/admin/AppBarAdmin';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'
import AdminDashboard from './components/admin/AdminDashboard';
import AdminViewStudents from './components/admin/AdminViewStudents'
import AdminViewClasses from './components/admin/AdminViewClasses'
import StudentLogin from './components/student/StudentLogin';
import AppBarStudent from './components/student/AppBarStudent';
import StudentViewClasses from './components/student/StudentViewClasses';
import Enroll from './components/student/Enroll';

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
          <Route path="student/login" element={<StudentLogin />} />
          <Route path="/student/view" element={<AppBarStudent />}> 
            <Route path="classes" element={<StudentViewClasses />}/>
            <Route path="enroll" element={<Enroll />}/>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App