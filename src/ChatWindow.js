import React from 'react';
import SendMessageForm from './SendMessageForm';
import Message from './Message';

class ChatWindow extends React.Component {
  
  handleNewMessage = (message) => {
    const newMessage = { username: this.props.user.username, text: message };
    return this.props.handleSendMessage(newMessage);
  }

  render(){
    return(
      <div className="chat-window">
            <h2>Super Awesome Chat</h2>
            <div className="name sender">{this.props.user.username}</div>

            <ul className="message-list">
              {this.props.messages.map((message, index) => (
                <Message index={index} message={message} username={this.props.user.username}/>
              ))}
            </ul>

            <div>
              <SendMessageForm sendMessage={this.handleNewMessage}/>
            </div>
          </div>
    )
  }
}

export default ChatWindow;