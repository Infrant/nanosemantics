import React, {useState, useCallback} from 'react'
import css from './InputField.module.scss'
import SendButton from "../SendButton/SendButton";
import {TextField} from "@mui/material";

export default React.memo(
    () => {
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
            [inputValue]
        )

        const onSendMessage = useCallback(
            () => {
                if (!inputValue) return
                console.log('send ', inputValue)
                setInputValue('')
            }
            , [inputValue]
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
                    label={'Your message'}
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