import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './View/Auth/Login';

function App() {
  return (
    <Router>
      <Routes>
        {/* Auth Routes */}
        <Route path="/login" element={<Login />} />
        
        {/* Default Redirect to Login for now */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        
        {/* Catch-all route to redirect back to login */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
