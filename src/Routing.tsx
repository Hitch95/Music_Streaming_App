import { Routes, Route } from 'react-router-dom';

import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute';
import { AuthProvider } from './hooks/useAuth';
import Login from './pages/Login/LoginPage';
import Home from './pages/Home/Home';
import Secret from './pages/Secret/Secret';
import { Signup } from './pages/Signup/Signup';
import Layout from './Layout';

const Routing = () => {
  return (
    <AuthProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/secret"
            element={
              <ProtectedRoute>
                <Secret />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Layout>
    </AuthProvider>
  );
};

export default Routing;
