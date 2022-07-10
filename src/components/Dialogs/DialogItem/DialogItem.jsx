import React from "react";
import { NavLink } from "react-router-dom";

import mod from './DialogItem.module.css'

const DialogItem = (props) => {
    let path = '/massages/' + props.id;

    return (
        <div className={ mod.dialog + ' ' + mod.active }>
            <NavLink to={ path }>{ props.name }</NavLink> 
        </div>
    )
}

export default DialogItem;