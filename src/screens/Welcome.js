import {useNavigate} from "react-router-dom";
import colors from "../colors";
import screenNames from "../screenNames";

export default function Welcome() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(screenNames.settings);
  };

  return (
    <div
      align="center"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}>
      <h2
        style={{
          color: colors.white,
          fontSize: 40,
          marginTop: 300,
          width: 500,
        }}>
        Welcome
      </h2>
      <button
        style={{
          borderRadius: 100 / 2,
          overflow: "hidden",
          borderWidth: 6,
          borderColor: "black",
          color: "white",
          backgroundColor: "DodgerBlue",
          marginTop: 10,
          fontSize: 40,
          width: 500,
        }}
        onClick={handleClick}>
        Get Started
      </button>
    </div>
  );
}
