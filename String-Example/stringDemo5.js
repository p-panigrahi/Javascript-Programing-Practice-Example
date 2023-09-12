import React, { useState } from "react";

function Memo() {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  function increment1() {
    setCount(count + 1);
  }
  function increment2() {
    setCount1(count1 + 1);
  }
  function isEven() {
    let i = 0;
    while(i < 300000000) i++
    return count % 2 === 0;
  }
  return (
    <div>
      <button onClick={increment1}>Parent {count}</button>
      <span>{isEven() ? "Even" : "Odd"}</span>
      <button onClick={increment2}>Child {count1}</button>
    </div>
  );
}
export default Memo;