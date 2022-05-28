import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Col, Container, Row } from "reactstrap";
import axios from "axios";

export default function Settings() {
  const navigate = useNavigate();

  const [selectedCategory, setSelectedCategory] = useState(9);
  const [selectedDifficulty, setSelectedDifficulty] = useState("easy");
  console.log("🔺  RAM - Settings - selectedDifficulty", selectedDifficulty);
  const [categoryList, setCategoryList] = useState([]);
  console.log("🔺  RAM - Settings - categoryList", categoryList);

  async function getCategoryList() {
    const response = await axios.get("https://opentdb.com/api_category.php");
    setCategoryList(response?.data?.trivia_categories);
  }
  useEffect(() => {
    getCategoryList();
  }, []);

  const handleStart = () => {
    if (selectedCategory && selectedDifficulty) {
      const url =
        "https://opentdb.com/api.php?amount=10&category=" +
        selectedCategory +
        "&difficulty=" +
        selectedDifficulty +
        "&type=multiple";
      console.log("🔺  RAM - handleStart - url", url);

      navigate("/question", { state: { url } });
    } else {
      return (
        <div className="alert alert-primary" role="alert">
          A simple primary alert—check it out!
        </div>
      );
    }
  };

  const myStyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    borderRadius: 100 / 2,
    overflow: "hidden",
    borderWidth: 6,
    borderColor: "black",
    fontSize: 20,
    width: 200,
    height: 30,
    textAlign: "center",
  };
  //
  const my_Style = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };


  console.log("🔺  RAM - Settings - categoryList", categoryList)
  if( categoryList.length ===0 ) return <div>Loading....</div>
  return (
    <Container>
      <Row>
        <Col md={3}></Col>
        <Col md={6}>
          <div>
            {/* <button onClick={handleLevel}> easy </button>
      <button onClick={handleLevel}> medium </button>
      <button onClick={handleLevel}> medium </button> */}
            <div
              style={{
                fontSize: 20,
                color: "white",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              Selection Difficulty:
            </div>

            <div
              className="btn-group"
              role="group"
              style={{
                ...my_Style,
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
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
                onClick={() => setSelectedDifficulty("easy")}
              >
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
                onClick={() => setSelectedDifficulty("medium")}
              >
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
                onClick={() => setSelectedDifficulty("hard")}
              >
                hard
              </button>
            </div>

            {/* <button onClick={handleCategoryClick}> 6 numarali category </button> * */}
            <div
              style={{
                fontSize: 20,
                color: "white",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              Selection Category:
            </div>
            <div style={my_Style}>
              <select
                style={{ ...myStyle, height: 50, width: 411 }}
                onChange={(e) => {
                  setSelectedCategory(e.target.value);
                }}
                name="selection"
                id="selection"
              >
                {categoryList.map((categoryItem) => (
                  <option key={categoryItem.id} value={categoryItem.id}>
                    {categoryItem.name}
                  </option>
                ))}
              </select>
            </div>

            <div style={my_Style}>
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
                onClick={handleStart}
              >
                Let's Start The Game
              </Button>
            </div>
          </div>
        </Col>
        <Col md={3}></Col>
      </Row>
    </Container>
  );
}
//"https://opentdb.com/api.php?amount=10&category=10&difficulty=easy&type=multiple"
// https://opentdb.com/api_category.php
// component reacstrap isimleri nedir ne degildir. https://reactstrap.github.io/?path=/docs/components-accordion--accordion
