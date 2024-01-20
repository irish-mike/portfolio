import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import Like from "./components/Like";

function App() {
  const [alertVisible, setAlertVisible] = useState(false);

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisible(false)}>
          <strong>Holy guacamole!</strong> You should check in on some of those
          fields below.
        </Alert>
      )}

      <Button colour="dark" onClick={() => setAlertVisible(true)}>
        Click Me!
      </Button>

      <Like colour="green" onClick={() => console.log("Like Clicked")}></Like>
    </div>
  );
}

export default App;
