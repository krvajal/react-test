import React, { Component } from "react";
import "./App.css";
import Post from './Post';

class App extends Component {
  state =  {}
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts").then(function(
      response
    ) {
      if (response.ok) {
        var contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
          return response.json();
        }
      }
    }).then( posts => {
      this.setState({posts})
    });
  }
  render() {
    var content;
    if (this.state.posts) {
        content =  this.state.posts.map(post => {
          return <Post key = {post.id} title = {post.title} body = {post.body} id={post.id}/>
        })
    } else {
      content = <p> Loadding ...</p>;
    }
    return (
      <div className="App">
          {content}
      </div>
    );
  }
}

export default App;
