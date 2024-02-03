import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Loader from "../Component/loader/Loader";
import { auth } from "../config/firebase";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setLoading(false);
      if (user) {
        setAuthenticated(true);
      } else {
        setAuthenticated(false);
        navigate('/login');
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  if (loading) {
    return <Loader />;
  }

  return authenticated ? (
    <Routes>
      <Route path="*" element={<Component {...rest} />} />
    </Routes>
  ) : null;
};

export default PrivateRoute;
