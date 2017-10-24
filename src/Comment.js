import React from "react";
import "./Comment.css";
import PropTypes from "prop-types";

export const Comment = props => {
  return (
    <div className="Comment">
      <div>From: {props.email}</div>
      <h4> {props.name} </h4>
      <p>{props.body}</p>
    </div>
  );
};

Comment.propTypes = {
  email: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired
};
