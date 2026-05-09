import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import Login from './View/Auth/Login';
import Dashboard from './View/Dashboard/Dashboard';
import Layout from './Layout/Layout';

const ProtectedRoute = () => {
  // Add authentication logic here
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        
        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<div className="typography-h1">Users Management (Coming Soon)</div>} />
          <Route path="/settings" element={<div className="typography-h1">Settings (Coming Soon)</div>} />
        </Route>

        {/* Default Redirects */}
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
