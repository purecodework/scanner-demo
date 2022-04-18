import { useState } from "react";
import "./App.css";
import BarcodeScannerComponent from "react-qr-barcode-scanner";

function App() {
  const [value, setValue] = useState(0);
  const [err, setError] = useState("");
  const [torch, setTorch] = useState(false);
  // const handleUpdate = (err, res) => {
  //   res ? setValue(res.text) : setError(err);
  // };

  return (
    <div className="App h-screen w-screen flex justify-center items-center bg-slate-300">
      <div>
        <div className="border-indigo-500/75">
          <BarcodeScannerComponent
            width={500}
            height={500}
            onUpdate={(err, result) => {
              if (result) setValue(result.text);
              else setError("Not Found");
            }}
            torch={torch}
          />
        </div>
        <div className="text-center mt-5">
          <>
            <button
              onClick={() => setTorch(!torch)}
              className="text-white bg-blue-700 p-2 rounded"
            >
              torch
            </button>
          </>
          <p className="text-indigo-500 mt-5">bar code: {value}</p>
          <p className="text-red-300">error: {err}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
