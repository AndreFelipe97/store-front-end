import Login from "./pages/login";
import Dashbard from "./pages/dashboard";

function App() {
  return <>{true ? <Login /> : <Dashbard />}</>;
}

export default App;
