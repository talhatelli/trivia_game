import {useNavigate, useLocation} from "react-router-dom";
import axios from "axios";
import React, {useEffect, useState} from "react";
import AnswerButton from "../components/AnswerButton";
import Countdown from "../components/Countdown";
import {randomizeArray} from "../helpers";

export default function Question() {
  const navigate = useNavigate();
  const location = useLocation();

  const [data, setData] = useState(null);
  const [index, setIndex] = useState(0);

  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [selectStatus, setSelectStatus] = useState("default");

  async function getData() {
    const {url} = location.state;
    const response = await axios.get(url);
    const newData = response.data.results.map((item) => {
      return {
        ...item,
        randomized: randomizeArray([item.correct_answer, ...item.incorrect_answers]),
      };
    });
    setData(newData);
  }

  function findSuitableType(answer) {
    console.log("answer", answer, selectedAnswer, data[index].correct_answer);
    if (selectStatus === "default") {
      return "default";
    } else if (selectStatus === "selecting") {
      if (answer === selectedAnswer) {
        return "selected";
      } else return "unselected";
    } else if (selectStatus === "showResult") {
      if (answer === selectedAnswer && selectedAnswer === data[index].correct_answer) {
        return "true";
      } else return "false";
    }
  }

  useEffect(() => {
    if (selectStatus === "selecting") {
      setTimeout(() => {
        setSelectStatus("showResult");
      }, 4000);
    } else if (selectStatus === "showResult") {
      // setIndex(index + 1);
      // setSelectedAnswer(selected_answer);
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

      setTimeout(() => {
        setIndex(index + 1);
        setSelectStatus("default");
        setSelectedAnswer(null);
      }, 4000);
    }
  }, [selectStatus, index, selectedAnswer]);

  useEffect(() => {
    getData();
  }, []);

  console.log(index, data);

  function answerButtonClick(selected_answer) {
    setSelectedAnswer(selected_answer);
    setSelectStatus("selecting");
  }

  if (!data) return <div>loading...</div>;

  const current = data[index];

  return (
    <div className="Question">
      <Countdown />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}>
        <h2
          style={{
            fontSize: 30,
            marginTop: 100,
            width: 500,
          }}>
          {decodeURIComponent(current.question)}
        </h2>
      </div>
      <div
        style={{
          fontSize: 20,
          marginBottom: 40,
          fontWeight: "lighter",
        }}></div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}>
        {current.randomized.map((answer, index) => {
          return (
            <AnswerButton
              key={index}
              type={findSuitableType(answer)}
              onClick={() => answerButtonClick(answer)}
              title={answer}></AnswerButton>
          );
        })}

        {/* TEMP */}
        <div>{current.correct_answer}</div>
        {/* TEMP */}
      </div>
    </div>
  );
}
