import React from 'react';
import SendMessageForm from './SendMessageForm';

class ChatWindow extends React.Component {

  render(){
    return(
      <div className="chat-window">
            <h2>Super Awesome Chat</h2>
            <div className="name sender">{this.props.user.username}</div>

            <ul className="message-list">
              {this.props.messages.map((message, index) => (
                <li
                  key={index}
                  className={
                    message.username === this.props.user.username ? 'message sender' : 'message recipient'
                  }
                >
                  <p>{`${message.username}: ${message.text}`}</p>
                </li>
              ))}
            </ul>

            <div>
              <SendMessageForm />
            </div>
          </div>
    )
  }
}

export default ChatWindow;