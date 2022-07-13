import React, {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {Button, Col, Container, Row} from "reactstrap";

import SelectionDifficulty from "../components/SelectionDifficulty";
import SelectCategory from "../components/SelectCategory";
import StartButton from "../components/StartButton";

export default function Settings() {
  const navigate = useNavigate();

  const handleStart = () => {
    if ("selectedCategory" && "selectedDifficulty") {
      const url = "https://opentdb.com/api.php?amount=10&category=" + "10" + "&difficulty=" + "easy" + "&type=multiple";

      navigate("/question", {state: {url}});
    } else {
      return (
        <div className="alert alert-primary" role="alert">
          A simple primary alert—check it out!
        </div>
      );
    }
  };

  return (
    <Container>
      <Row>
        <Col md={3}></Col>
        <Col md={6}>
          <SelectionDifficulty />
          <SelectCategory />
          <StartButton onClick={handleStart} />
        </Col>
        <Col md={3}></Col>
      </Row>
    </Container>
  );
}
