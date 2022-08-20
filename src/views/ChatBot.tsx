import React from "react";
import css from './ChatBot.module.scss'
import Header from "../components/Header/Header";
import InputField from "../components/InputField/InputField";
import MessageField from "../components/MessageField/MessageField";

export default React.memo(
    () => {
        return (
            <div className={css['chat-bot']}>
                <Header/>
                <MessageField/>
                <InputField/>
            </div>
        )
    }
)