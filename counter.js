
import "./styles.css";
import { useState } from "react";
export default function Counter2() {
  const [number, setNumber] = useState(1);
  function incerementNumber() {
    let n = number;
    n += 1;
    setNumber(n);
  }

  function decrementNumber() {
    let m = number;
    if (m == 0) {
      return alert("you cant click");
    }
    m -= 1;
    setNumber(m);
  }
  return (
    <div className="buttonContainer">
      <h1> {number} </h1>
      <button className="button" onClick={incerementNumber}>
        incerementNumber{" "}
      </button>
      <button className="button" onClick={decrementNumber}>
        {" "}
        decrementNumbe{" "}
      </button>
    </div>
  );
}
