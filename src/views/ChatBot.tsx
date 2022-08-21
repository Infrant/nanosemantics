import React, {useEffect} from "react";
import {CircularProgress} from "@mui/material";
import css from './ChatBot.module.scss'
import Header from "../components/Header/Header";
import InputField from "../components/InputField/InputField";
import MessageField from "../components/MessageField/MessageField";
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {chatInit} from "../store/actions/ActionCreators";

export default React.memo(() => {
        /**
         * Init data
         */
        const dispatch = useAppDispatch();
        const {isLoading, error, cuid} = useAppSelector(state => state.chatSlice)

        /**
         * Lifecycle
         */
        useEffect(
            () => {
                dispatch(chatInit(cuid))
            },
            []
        )

        /**
         * Render
         */
        if (isLoading) {
            return <CircularProgress/>
        }
        if (error) {
            return <h1>Ошибка: {error}</h1>
        }
        return (
            <div className={css['chat-bot']}>
                <Header/>
                <MessageField/>
                <InputField/>
            </div>
        )
    }
)