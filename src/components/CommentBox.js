import React from "react";

class CommentBox extends React.Component {
  state = {
    comment: "",
  };

  handleSubmit = (event) => {
    event.preventDefault();

    // TODO - Call an action creator
    // Save the comment

    this.setState({ comment: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h4>Add a comment</h4>
        <textarea
          className="textarea-comment"
          value={this.state.comment}
          onChange={(event) => this.setState({ comment: event.target.value })}
        />
        <div>
          <button className="submit-comment" type="submit">
            Submit comment
          </button>
        </div>
      </form>
    );
  }
}

export default CommentBox;
