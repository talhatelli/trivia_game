import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "../Components/Button";
import Countdown from "../Components/Countdown";

export default function Question() {
  const navigate = useNavigate();
  const location = useLocation();

  const [data, setData] = useState(null);
  const [index, setIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  console.log("🔺  RAM - Question - selectedAnswer", selectedAnswer);

  async function getData() {
    const { url } = location.state;
    console.log("🔺  RAM - getData - url", url);

    const response = await axios.get(url);
    const newData = response.data.results.map((item) => {
      return { ...item, randomized: createRandom([item.correct_answer, ...item.incorrect_answers]) };
    });
    setData(newData);
  }
  useEffect(() => {
    getData();
  }, []);

  console.log(data);
  function createRandom(arr) {
    let myArr = [...arr];
    let randomizedArr = [];

    while (myArr.length > 0) {
      var randomIndex = Math.floor(Math.random() * myArr.length);
      randomizedArr.push(myArr[randomIndex]);
      myArr.splice(randomIndex, 1);
    }
    return randomizedArr;
  }

  function answerButtonClick(selected_answer) {
    setSelectedAnswer(selected_answer);
    // if (selected_answer === data[index].correct_answer) {
    //   console.log("doğru cevapladın");
    //   const isLastQuestion = data.length === index + 1;

    //   if (isLastQuestion) {
    //     navigate("/win");
    //   } else setIndex(index + 1);
    // } else {
    //   navigate("/gameover");
    //   console.log("yanlış cevap");
    // }
  }

  if (!data) return <div>loadıng...</div>;



  return (
    <div className="Question">
      <Countdown />
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
            fontSize: 30,
            marginTop: 100,
            width: 500,
          }}
        >
          {data[index].correct_answer}
          {decodeURIComponent(data[index].question)}
        </h2>
      </div>
      <div style={{ fontSize: 20, marginBottom: 40, fontWeight: "lighter" }}></div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {data[index].randomized.map((selected_answer, index) => {
          return (
            <Button
              key={index}
              onClick={() => answerButtonClick(selected_answer)}
              style={{
                fontSize: 30,
                marginTop: 10,
                width: 500,
                      backgroundColor: selectedAnswer === selected_answer ? "red" : "#0d6efd",

              }}
            >
              {selected_answer}
            </Button>
          );
        })}
        <div>{data[index].correct_answer}</div>
      </div>
    </div>
  );
}
