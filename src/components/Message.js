import React from "react";

const Message = ({ added }) => {
  return (
    <div className={`message-box ` + added}>
      <p>Added to cart!</p>
    </div>
  );
};

export default Message;
