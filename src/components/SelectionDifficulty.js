import React, {useState, useEffect} from "react";
import SelectTitle from "./SelectTitle";

export default function SelectionDifficulty() {
  const [selectedDifficulty, setSelectedDifficulty] = useState("easy");
  console.log("🚀 TLH  - SelectionDifficulty - selectedDifficulty", selectedDifficulty);

  return (
    <>
      <SelectTitle icineYazilacakSey={"Select Difficulty: "} />

      <div
        className="btn-group"
        role="group"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "center",
        }}>
        <button
          type="button "
          style={
            selectedDifficulty === "easy"
              ? {
                  backgroundColor: "white",
                  color: "blue",
                }
              : {}
          }
          className="btn btn-primary"
          onClick={() => setSelectedDifficulty("easy")}>
          easy
        </button>
        <button
          type={"button"}
          className="btn btn-primary"
          style={
            selectedDifficulty === "medium"
              ? {
                  backgroundColor: "white",
                  color: "blue",
                }
              : {}
          }
          onClick={() => setSelectedDifficulty("medium")}>
          medium
        </button>
        <button
          type="button"
          style={
            selectedDifficulty === "hard"
              ? {
                  backgroundColor: "white",
                  color: "blue",
                }
              : {}
          }
          className="btn btn-primary"
          onClick={() => setSelectedDifficulty("hard")}>
          hard
        </button>
      </div>
    </>
  );
}
