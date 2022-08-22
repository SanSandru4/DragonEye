import React from "react";

import { updateNewMessageBodyCreator, sendMessageCreator } from "../../redux/dialog-reducer";
import Dialogs from '../Dialogs/Dialogs'

const DialogsContainer = (props) => {
    let state = props.store.getState().dialogPage;

    let newMessageSend = () => {
        props.store.dispatch(sendMessageCreator());
    };

    let onNewMessageChange = (body) => {
        props.store.dispatch(updateNewMessageBodyCreator(body));
    };

    return <Dialogs updateNewMessageBody = { onNewMessageChange } 
                    sendMessage = { newMessageSend } 
                    dialogPage = { state }/>
}

export default DialogsContainer;