import React from 'react';

function Message(props) {
  return(
    <li
      key={props.index}
      className={
        props.message.username === props.username ? 'message sender' : 'message recipient'
      }
    >
      <p>{`${props.message.username}: ${props.message.text}`}</p>
    </li>
  )
}

export default Message;