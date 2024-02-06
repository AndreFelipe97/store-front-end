import "./App.scss";
import { ConfirmTransactionButton } from "./components/Buttons/ConfirmTransaction";
import { NewTransactionButton } from "./components/Buttons/NewTransaction";

function App() {
  return (
    <>
      <h1>Store Front End</h1>
      <NewTransactionButton />
      <ConfirmTransactionButton />
    </>
  );
}

export default App;
