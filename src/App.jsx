import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import BarcodeScannerComponent from "react-qr-barcode-scanner";

function App() {
  const [value, setValue] = useState(0);
  const [err, setError] = useState("");
  const handleScan = (data) => setValue(data);
  const handleError = (err) => console.log(err);

  return (
    <div className="App">
      start
      <BarcodeScannerComponent
        width={500}
        height={500}
        onUpdate={(err, result) => {
          if (result) setValue(result.text);
          else setErr(err);
        }}
      />
      end
      <p>{value}</p>
      <p>{err}</p>
    </div>
  );
}

export default App;
