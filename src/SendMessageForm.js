import React from 'react';

class SendMessageForm extends React.Component {
  
  state = {
    newMessage : ''
  }
  /*
  If the user did not type anything, he/she should not be
  allowed to submit.
  */
  isDisabled = () => {
    if(this.state.newMessage === ''){
      return true;
    } else {
      return false;
    }
  };

  handleMessageInput = (message) => {
    this.setState(() => ({
      newMessage : message
    }))
  }

  sendMessage = (event) =>{
    event.preventDefault();
    this.props.sendMessage(this.state.newMessage);
  }

  render(){
    return(
      <form className="input-group">
        <input 
       		type="text" 
       		className="form-control" 
       		placeholder="Enter your message..."
       		value={this.state.newMessage}
      		onChange={(event) => this.handleMessageInput(event.target.value)}
      />
          <div className="input-group-append">
            <button 
				className="btn submit-button" 
				disabled={this.isDisabled()} 
				onClick={this.sendMessage}>
              		SEND
            </button>
          </div>
      </form>
    )
  }
}

export default SendMessageForm;