import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import Login from './View/Auth/Login';
import Dashboard from './View/Dashboard/Dashboard';
import Users from './View/Users/Users';
import Astrologers from './View/Astrologers/Astrologers';
import AstrologerDetails from './View/Astrologers/AstrologerDetails';
import AiAstrologers from './View/AiAstrologers/AiAstrologers';
import LiveMonitor from './View/LiveMonitor/LiveMonitor';
import Wallets from './View/Wallets/Wallets';
import Payouts from './View/Payouts/Payouts';
import Reports from './View/Reports/Reports';
import CallHistory from './View/Reports/CallHistory';
import PujaBooking from './View/PujaBooking/PujaBooking';
import Store from './View/Store/Store';
import Content from './View/Content/Content';
import Notifications from './View/Notifications/Notifications';
import Settings from './View/Settings/Settings';
import Sessions from './View/Sessions/Sessions';
import Layout from './Layout/Layout';

import Profile from './View/Profile/Profile';
import UserDetails from './View/Users/UserDetails';

const ProtectedRoute = () => {
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
          <Route path="/users" element={<Users />} />
          <Route path="/users/:id" element={<UserDetails />} />
          <Route path="/astrologers" element={<Astrologers />} />
          <Route path="/astrologers/:id" element={<AstrologerDetails />} />
          <Route path="/ai-astrologers" element={<AiAstrologers />} />
          <Route path="/live-monitor" element={<LiveMonitor />} />
          <Route path="/sessions" element={<Sessions />} />
          <Route path="/wallets" element={<Wallets />} />
          <Route path="/payouts" element={<Payouts />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/call-history" element={<CallHistory />} />
          <Route path="/puja-booking" element={<PujaBooking />} />
          <Route path="/store" element={<Store />} />
          <Route path="/content" element={<Content />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/profile" element={<Profile />} />
        </Route>

        {/* Default Redirects */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
