import React from "react";
import Button from "react-bootstrap/Button";

const NewButton = (props) => {
  return (
    <div>
      <Button className="new-button" size="lg">
        {props.name}
      </Button>
    </div>
  );
};

export default NewButton;
