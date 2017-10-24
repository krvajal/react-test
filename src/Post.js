import React from "react";
import "./Post.css";
import ApiUtils from "./utils/ApiUtils";
import { Comment } from "./Comment";
import PropTypes from "prop-types";

/**
 * Simple post component to show 
 * the title, content and a toggl
 */
export default class Post extends React.Component {
  state = {
    commentsClosed: true
  };

  loadComments = postId => {
    ApiUtils.loadComments(postId).then(comments => {
      console.log(comments);
      this.setState({ comments });
    });
  };
  componentDidMount() {
    this.loadComments(this.props.id);
  }
  commentsList = () => {
    // maybe I could create a separate
    // component to contain the list 
    // of comments, but this is a simple example
    // that there is not need for
    if (this.state.commentsClosed) return null;
    if (!this.state.comments) {
      return <p> Loading comments...</p>;
    } else {
      return (
        <div className="CommentsContainer">
          {this.state.comments.map(comment => (
            <Comment {...comment} key={comment.id} />
          ))}
        </div>
      );
    }
  };
  handleToggle = () => {
    this.setState({ commentsClosed: !this.state.commentsClosed });
  };
  render() {
    var label = this.state.commentsClosed ? "Show comments" : "Hide comments";
    return (
      <article className="Post">
        <h1>{this.props.title}</h1>
        <p> {this.props.body} </p>
        <button onClick={this.handleToggle}> {label} </button>
        {this.commentsList()}
      </article>
    );
  }
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
};
