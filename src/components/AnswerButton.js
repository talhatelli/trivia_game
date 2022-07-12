import React from "react";
import {Button} from "reactstrap";

const buttonTypes = {
  default: "default",
  unselected: "unselected",
  selected: "selected",
  true: "true",
  false: "false",
};

export default function AnswerButton(props) {
  const {title, onClick, type = buttonTypes.default} = props;

  if (type === buttonTypes.default) {
    return (
      <Button
        onClick={onClick}
        style={{fontSize: 30, marginTop: 10, width: 500, backgroundColor: "blue"}}
        color="primary">
        {title}
      </Button>
    );
  }

  if (type === buttonTypes.unselected) {
    return (
      <Button
        onClick={onClick}
        style={{fontSize: 30, marginTop: 10, width: 500, backgroundColor: "gray"}}
        color="primary">
        {title}
      </Button>
    );
  }

  if (type === buttonTypes.selected) {
    return (
      <Button
        onClick={onClick}
        style={{fontSize: 30, marginTop: 10, width: 500, backgroundColor: "blue"}}
        color="primary">
        {title}
      </Button>
    );
  }

  if (type === buttonTypes.true) {
    return (
      <Button
        onClick={onClick}
        style={{fontSize: 30, marginTop: 10, width: 500, backgroundColor: "green"}}
        color="primary">
        {title}
      </Button>
    );
  }

  if (type === buttonTypes.false) {
    return (
      <Button
        onClick={onClick}
        style={{fontSize: 30, marginTop: 10, width: 500, backgroundColor: "red"}}
        color="primary">
        {title}
      </Button>
    );
  }
}
