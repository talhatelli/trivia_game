import React from "react";
import {Button, Col, Container, Row} from "reactstrap";

export default function StartButton(props) {
  const {onClick} = props;
  return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
      <Button
        align="center"
        style={{
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "center",
          borderRadius: 200 / 2,
          overflow: "hidden",
          borderWidth: 6,
          borderColor: "white",
          backgroundColor: "DodgerBlue",
          fontSize: 25,
          marginTop: 30,
        }}
        onClick={onClick}>
        Let's Start The Game
      </Button>{" "}
    </div>
  );
}
