import React from "react";
import { Button } from "reactstrap";

export default (props) => {
  return (
    <Button color="primary" {...props}>
      {props.children}
    </Button>
  );
};

// https://reactstrap.github.io/?path=/docs/components-button--button

// https://www.w3schools.com/css/css_margin.asp
// https://www.w3schools.com/css/css_padding.asp

// layout
