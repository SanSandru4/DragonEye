import React from "react";

import DialogItem from './DialogItem/DialogItem';
import Messages from "./Messages/Messages";

import mod from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={ mod.dialogs_main }>
            <div className={ mod.dialogs_items }>
                <DialogItem name='Dima' id='1' />
                <DialogItem name='Max' id='2' />
                <DialogItem name='Vlad' id='3' />
                <DialogItem name='Vadim' id='4' />
                <DialogItem name='Sasha' id='5' />
                <DialogItem name='Vitalya' id='6' />
            </div>
            <div className={ mod.massages }>
                <Messages message='Hi'/>
                <Messages message='How are your?'/>
                <Messages message='Yo'/>
            </div>
        </div>
    )
}

export default Dialogs