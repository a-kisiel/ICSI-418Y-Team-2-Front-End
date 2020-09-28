import React, { Component } from "react";

class Chat extends Component {
  render() {
    return (
      <div>
        <div className="chat-wrapper">
          <div className="friends-list">
            <p>Tournament Group Chat</p>
            <p>Friend Direct Chat</p>
          </div>

          <div className="chat-list">
            <p>Message 1</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Chat;
