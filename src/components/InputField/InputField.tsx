import React, {useState, useCallback} from 'react'
import {TextField} from "@mui/material";
import css from './InputField.module.scss'
import SendButton from "../SendButton/SendButton";
import {useAppDispatch} from "../../hooks/redux";
import {addMessage} from "../../store/reducers/ChatSlice";

export default React.memo(() => {
        /**
         * State
         */
        const [inputValue, setInputValue] = useState<string>('')

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
                onSendMessage()
            },
            [inputValue]
        )

        const onSendMessage = useCallback(
            () => {
                if (!inputValue) return
                dispatch(addMessage({author: 'user', message: inputValue}))
                setInputValue('')
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
                    style={{width: '100%'}}
                    onChange={onInputChange}
                    onKeyDown={onKeyDown}
                />
                <SendButton
                    isDisabled={!inputValue}
                    onSendMessage={onSendMessage}
                />
            </div>
        )
    }
)