import "regenerator-runtime/runtime";
import React, { useState, useEffect } from "react";
import './../styles/App.css';

const App = () => {
  return (
    <div>
          <SumCalculator />

        {/* Do not remove the main div */}
    </div>
  )
}

export default App

function SumCalculator() {
  const [numbers, setNumbers] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [sum, setSum] = useState(0);

  // Update sum asynchronously whenever numbers change
  useEffect(() => {
    let isCancelled = false;

    const calculateSum = async () => {
      // simulate async calculation
    new Promise((resolve) => setTimeout(resolve, 50)).then(() => {
  if (!isCancelled) {
    const total = numbers.reduce((acc, num) => acc + num, 0);
    setSum(total);
  }
});
    };

    calculateSum();

    return () => {
      isCancelled = true;
    };
  }, [numbers]);

  // Handle user input
  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    const parsedValue = parseInt(value, 10);
    if (!isNaN(parsedValue)) {
      setNumbers((prev) => [...prev, parsedValue]);
    }
  };

  return (
    <div style={{ fontFamily: "Arial", padding: "20px" }}>
      <h1>Sum Calculator</h1>
      <input
        type="number"
        value={inputValue}
        onChange={handleChange}
        placeholder="Enter number"
        style={{
          padding: "8px",
          fontSize: "16px",
          marginBottom: "10px",
          width: "150px",
        }}
      />
      <p><strong>Sum:</strong> {sum}</p>
    </div>
  );
}

