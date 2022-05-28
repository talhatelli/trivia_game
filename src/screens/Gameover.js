import { buildQueries } from "@testing-library/react";
import React from "react";
import { Button } from "reactstrap";

export default function Gameover() {
  return (
    <div
      align="center"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h2
        style={{
          fontSize: 100,
          marginTop: 300,
          width: 400,
        }}
      >
        Gameover{" "}
      </h2>
    </div>
  );
}
