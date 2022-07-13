import React, {useState} from "react";
import CountDwn from "react-number-count-down";
export default function Countdown(props) {
  const [fromValue, setFromValue] = useState(50);

  return (
    <CountDwn
      from={fromValue}
      to={0}
      type={"-"}
      addon={"seconds"}
      interval={1}
      onComplete={() => alert("Count down completed")}
    />
  );
}
