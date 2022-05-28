import { useNavigate } from "react-router-dom";

export default function Win() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Win</h2>
      <button onClick={() => navigate("/")}>Tekrar başla</button>
    </div>
  );
}
