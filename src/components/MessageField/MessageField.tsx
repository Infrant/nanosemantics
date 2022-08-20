import React, {useEffect, useMemo, useRef} from "react";
import css from './MessageField.module.scss'
import {useAppSelector} from "../../hooks/redux";
import Message from "../Message/Message";

export default React.memo(() => {
        /**
         * Init data
         */
        const {messages} = useAppSelector(state => state.chatReducer)
        const divEl = useRef<HTMLDivElement>(null)

        /**
         * Lifecycle
         */
        useEffect(
            () => {
                const isDivElement = divEl && divEl.current
                if (!isDivElement) return

                divEl.current.scrollTop = divEl.current.scrollHeight - divEl.current.clientHeight
            },
            [messages]
        )

        /**
         * Render
         */
        const elements = useMemo(
            () => {
                return messages.map(({message, author}, idx) => {
                    return <Message key={idx} message={message} author={author}/>
                })
            },
            [messages]
        )

        return (
            <div
                className={css['message-field']}
                ref={divEl}
            >
                {elements}
            </div>
        )
    }
)