import Login from "./pages/login";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function App() {
  const [isNotAuthenticated, setIsNotAuthenticated] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("auth");
    if (!auth) {
      setIsNotAuthenticated(true);
    } else {
      navigate('/dashboard')
    }
  }, []);

  return <>{isNotAuthenticated && <Login />}</>;
}

export default App;
