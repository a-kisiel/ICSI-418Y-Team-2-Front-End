import React, { Component } from 'react';
import './Left.css';

class ChatBox extends Component {
  render() {
    return (
      

        <div className="chatbox-wrapper">
				<div className="chat-header">Chat Room</div>
				<div className="txt-chat-display">
					<div className="chat-wrapper">
					<li className="chat-inside" >Hello World adlkj jjjjjjjjjjjjjjsdjjjjj           hhhhhhhh       hhhhhhhh      hjjjj jadd!</li></div>
					<div className="chat-wrapper">
					<li className="chat-outside">Hello World!</li></div>

					<div className="chat-wrapper">
					<li className="chat-outside" >Hello World!</li></div>
					<div className="chat-wrapper">
					<li className="chat-outside" >Hello World!</li></div>
					<div className="chat-wrapper">
					<li className="chat-inside" >Hello World adlkj jjjjjjjjjjjjjjsdjjjjj           hhhhhhhh       hhhhhhhh      hjjjj jadd!</li></div>


				</div>
				<div className="send-chat">
                    <form className="form-chat">
                    <input type="text" name="chat_msg" placeholder="Enter your message"/>
                    <input type="submit" name="send_chat" value="Send"></input>
					</form>
				</div>
			</div>
    )
  }
}

export default ChatBox;




