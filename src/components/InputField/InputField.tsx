import React, {useState, useCallback} from 'react'
import {TextField} from "@mui/material";
import css from './InputField.module.scss'
import SendButton from "../SendButton/SendButton";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {addMessage} from "../../store/reducers/ChatSlice";
import {USER} from "../../constants/constants";
import {chatRequest} from "../../store/actions/ActionCreators";

export default React.memo(() => {
        /**
         * State
         */
        const [inputValue, setInputValue] = useState<string>('')
        const {isSendingMessage} = useAppSelector(state => state.chatSlice)

        /**
         * Handlers
         */
        const dispatch = useAppDispatch();

        const onInputChange = useCallback(
            (e: React.ChangeEvent<HTMLInputElement>): void => {
                setInputValue(e.target.value)
            },
            []
        )

        const onKeyDown = useCallback(
            (e: React.KeyboardEvent<HTMLInputElement>): void => {
                if (e.code !== 'Enter') return
                if (isSendingMessage) return
                onSendMessage()
            },
            [inputValue, isSendingMessage]
        )

        const onSendMessage = useCallback(
            () => {
                if (!inputValue) return
                dispatch(addMessage({author: USER, message: inputValue}))
                dispatch(chatRequest(inputValue))
                setInputValue('')
            },
            [inputValue, isSendingMessage]
        )

        /**
         * Render
         */
        return (
            <div className={css['input-field']}>
                <TextField
                    autoFocus
                    value={inputValue}
                    id="outlined-basic"
                    label='Your message'
                    variant="outlined"
                    size='small'
                    style={{width: '100%'}}
                    onChange={onInputChange}
                    onKeyDown={onKeyDown}
                />
                <SendButton
                    isSendingMessage={isSendingMessage}
                    isDisabled={!inputValue}
                    onSendMessage={onSendMessage}
                />
            </div>
        )
    }
)