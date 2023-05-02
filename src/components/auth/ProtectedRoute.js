import { useLocation, Navigate } from 'react-router-dom';
import { useAuth } from './useAuth.js';

export default function ProtectedRoute({children}) {
  const { currentUser } = useAuth();
  const location = useLocation();
  return currentUser
    ? children
    : <Navigate to="/login" replace state={{ path: location.pathname }} />;
}