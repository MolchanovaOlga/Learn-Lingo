import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import { selectAuthIsLoggedIn } from "../../redux/auth/selectors";

const PrivateRoute = ({ children, redirectTo = "/" }) => {
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);

  return isLoggedIn ? children : <Navigate to={redirectTo} replace />;
};

export default PrivateRoute;
