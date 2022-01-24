import { Navigate, Outlet } from 'react-router-dom';
import { useAuthState } from '../hooks/useAuthState';
import Spinner from './Spinner';

const PrivateRoute = () => {
  const { loggedIn, checkingStatus } = useAuthState();

  if (checkingStatus) {
    return <Spinner />;
  }

  return loggedIn ? <Outlet /> : <Navigate to="/sign-in" />;
};

export default PrivateRoute;
