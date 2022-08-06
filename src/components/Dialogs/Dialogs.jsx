import React from "react";

import DialogItem from './DialogItem/DialogItem';
import Messages from "./Messages/Messages";

import mod from './Dialogs.module.css';

const Dialogs = (props) => {

    let dialogs = props.state.dialogs;
    let newDialogs = dialogs.map((d) => <DialogItem name = { d.name } id = { d.id } /> );

    let messages = props.state.messages;
    let newMessage = messages.map((m) => <Messages message = { m.message } />);

    let newMessageSend = React.createRef();

    let btnSend = () => {
        let messageText = newMessageSend.current.value;
        console.log(messageText);
    };

    return (
        <div className = { mod.dialogs_main }>
            <div className = { mod.dialogs_items }>
                { newDialogs }
            </div>
            <div className = { mod.massages }>
                { newMessage }
            </div>
            <div>
                <textarea ref = { newMessageSend }></textarea>
                <button onClick = { btnSend }>Send</button>
            </div>
        </div>
    )
}

export default Dialogs;