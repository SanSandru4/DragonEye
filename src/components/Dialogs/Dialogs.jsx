import React from "react";

import DialogItem from './DialogItem/DialogItem';
import Messages from "./Messages/Messages";

import mod from './Dialogs.module.css';

const Dialogs = (props) => {

    let dialogsData = props.dialogs;
    let newDialogs = dialogsData.map( d => <DialogItem name = { d.name } id = { d.id } /> );

    let messagesData = props.messages;
    let newMessage = messagesData.map( m => <Messages message = { m.message } />);

    return (
        <div className = { mod.dialogs_main }>
            <div className = { mod.dialogs_items }>
                { newDialogs }
            </div>
            <div className = { mod.massages }>
                { newMessage }
            </div>
        </div>
    )
}

export default Dialogs