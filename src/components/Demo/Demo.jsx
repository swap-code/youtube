import  { useMemo, useState } from "react";
import { findPrime } from "../../utils/helper";

const Demo = () => {
  const [input, setInput] = useState(0);
  const [darkTheme, setDarkTheme] = useState(false);

  const prime = useMemo(()=>findPrime(input),[input]);

  return (
    <>
      <div
        style={{
          background: darkTheme ? "black" : "white",
          color: darkTheme ? "white" : "black",
          minHeight: "100vh",
          padding: "20px",
        }}
      >
        <button
          onClick={() => setDarkTheme(!darkTheme)}
          style={{
            padding: "10px 20px",
            marginBottom: "20px",
            backgroundColor: darkTheme ? "white" : "black",
            color: darkTheme ? "black" : "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Toggle Theme
        </button>
        <div>
          Demo
          <input
            type="number"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            style={{
              padding: "10px",
              margin: "10px 0",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
          />
        </div>
        <h1>n prime: {prime}</h1>
      </div>
    </>
  );
};

export default Demo;
