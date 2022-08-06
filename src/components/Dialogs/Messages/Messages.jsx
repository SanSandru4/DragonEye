import React from "react";
import mod from './Messages.module.css'

const Messages = (props) => {

    return (
        <div>
            <div className={ mod.message}>
                {props.message}
            </div>
        </div>
    )
}

export default Messages;