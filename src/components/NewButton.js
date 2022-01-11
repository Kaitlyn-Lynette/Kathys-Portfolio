import React from "react";
import Button from "react-bootstrap/Button";

const NewButton = (props) => {
  return (
    <div>
      <Button className="new-button" size="lg" onClick={props.handleClick} disable={props.disable}>
        {props.name}
       
      </Button>
    </div>
  );
};

export default NewButton;
