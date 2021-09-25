import React from 'react'
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogs-reducer';
import s from './Dialogs.module.css'
import DialogItem from './DialogsItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
  let dialogsElements = props
    .dialog
    .map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);

  let messagesElements = props
    .messages
    .map(message => <Message message={message.message}/>);

  let newMessageElement = React.createRef();

  let addMessage = () => {
    props.dispatch( addMessageActionCreator());
  }

  let onMessageChange = () => {
    let text = newMessageElement.current.value;
    props.dispatch( updateNewMessageTextActionCreator(text))
  }
  return (
    <div className={s.wrap}>
      <div className={s.dialogs}>
        <div className={s.dialogsItems}>
          {dialogsElements}
        </div>
        <div className={s.messages}>
          {messagesElements}
        </div>
      </div>
      <div className={s.messageWrapper}>
        <textarea 
                onChange={onMessageChange}
                value={props.newMessageText.newMessageText}
                placeholder = 'Enter ur text'
                ref={newMessageElement}
                >
                  </textarea>
        <button className={s.sendButton}  onClick={addMessage}>
          Send
        </button>
      </div>
    </div>
  )
}

export default Dialogs;