import React, {useState, useCallback} from 'react'
import css from './InputField.module.scss'
import SendButton from "../SendButton/SendButton";
import {TextField} from "@mui/material";

export default () => {
    /**
     * State
     */
    const [inputValue, setInputValue] = useState<string>('')

    /**
     * Handlers
     */
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
        []
    )

    const onSendMessage = () => {
        console.log('send')
    }

    /**
     * Render
     */
    return (
        <div className={css['input-field']}>
            <TextField
                value={inputValue}
                id="outlined-basic"
                label="Add your message"
                variant="outlined"
                size='small'
                style={{width: '100%'}}
                onChange={onInputChange}
                onKeyDown={onKeyDown}
            />
            <SendButton/>
        </div>
    )
}