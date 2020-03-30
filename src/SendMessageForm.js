import React from 'react';

class SendMessageForm extends React.Component {
  /*
  If the user did not type anything, he/she should not be
  allowed to submit.
  */
  isDisabled = () => {
    return false;
  };

  render(){
    return(
      <form className="input-group">
        <input type="text" className="form-control" placeholder="Enter your message..." />
          <div className="input-group-append">
            <button className="btn submit-button" disabled={this.isDisabled()}>
              SEND
            </button>
          </div>
      </form>
    )
  }
}

export default SendMessageForm;