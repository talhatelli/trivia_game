import * as React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Countdown() {
  const [counter, setCounter] = React.useState(600);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (counter <= 0) {
      navigate("/gameover");
    }
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);

    return () => clearInterval(timer);
  }, [counter]);

  return (
    <div className="Coundown">
      <div>Countdown: {counter}</div>
    </div>
  );
} // süre 15 saniye  // her soruda olacak //her doğru tıklndığinda tekrarlanacak
