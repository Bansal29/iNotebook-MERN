import React from "react";

const Alert = (props) => {
  const Capitalize = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };
  return (
    <div style={{ height: "50px" }}>
      {props.alertmsg && (
        <div
          className={`alert alert-${props.alertmsg.type} alert-dismissible fade show`}
          role="alert"
        >
          <strong>{Capitalize(props.alertmsg.type)}! </strong>
          {props.alertmsg.text}
        </div>
      )}
    </div>
  );
};

export default Alert;
