import Login from "./pages/login";
import Dashbard from "./pages/dashboard";
import { useEffect, useState } from "react";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const auth = localStorage.getItem("auth");
    if (auth) {
      setIsAuthenticated(true);
    }
  }, []);

  return <>{!isAuthenticated ? <Login /> : <Dashbard />}</>;
}

export default App;
