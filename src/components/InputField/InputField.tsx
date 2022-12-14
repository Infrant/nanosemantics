import React, {useState, useCallback, useRef} from 'react'
import {TextField} from "@mui/material";
import css from './InputField.module.scss'
import SendButton from "../SendButton/SendButton";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {addMessage} from "../../store/reducers/ChatSlice";
import {USER} from "../../constants/constants";
import {chatRequest} from "../../store/actions/ActionCreators";

export default React.memo(() => {
        const inputEl = useRef<HTMLInputElement>(null)

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
                if (!inputValue) return
                onSendMessage()
            },
            [inputValue, isSendingMessage]
        )

        const onSendMessage = useCallback(
            () => {
                dispatch(addMessage({author: USER, message: inputValue}))
                dispatch(chatRequest(inputValue))
                setInputValue('')
                inputEl.current?.focus()
            },
            [inputValue]
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
                    inputRef={inputEl}
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