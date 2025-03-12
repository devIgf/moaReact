import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  const [alertVisible, setAlerteVisibility] = useState(false);
  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlerteVisibility(false)}>My alert</Alert>
      )}
      <Button color="primary" onClick={() => setAlerteVisibility(true)}>
        My Button
      </Button>
    </div>
  );
}

export default App;
