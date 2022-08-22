import React from "react";

import DialogItem from './DialogItem/DialogItem';
import Messages from "./Messages/Messages";

import mod from './Dialogs.module.css';

const Dialogs = (props) => {
    let state = props.dialogPage;

    let newDialogs = state.dialogs.map((d) => <DialogItem name = { d.name } id = { d.id } /> );
    let newMessage = state.messages.map((m) => <Messages message = { m.message } />);
    let newMessageBody = state.newMessageBody;
    
    let newMessageSend = () => {
        props.sendMessage();
    };

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    };

    return (
        <div className = { mod.dialogs_main }>
            <div className = { mod.dialogs_items }>
                { newDialogs }
            </div>
            <div className = { mod.massages }>
                <div>{ newMessage }</div>
                <div>
                    <textarea value = { newMessageBody } onChange = { onNewMessageChange } ></textarea>
                    <button onClick = { newMessageSend }>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;