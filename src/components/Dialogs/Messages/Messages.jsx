import React from "react";
import mod from './Messages.module.css'

const Messages = (props) => {
    return (
        <div className={ mod.message}>{props.message}</div>
    )
}

export default Messages;