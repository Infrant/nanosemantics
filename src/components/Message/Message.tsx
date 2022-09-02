import React from "react";
import classNames from 'classnames'
import css from './Message.module.scss'
import {MessageType} from "../../interfaces/ChatTypes";
import {BOT, USER} from "../../constants/constants";

export default React.memo(({message, author}: MessageType) => {
        return (
            <div
                className={classNames(
                    css['message'],
                    author == USER ? css['message__user'] : css['message__bot']
                )}
                dangerouslySetInnerHTML={{__html: message}}
            />
        )
    }
)