import React, {useState} from 'react'
import css from './InputField.module.scss'
import SendButton from "../SendButton/SendButton";

export default () => {
    /**
     * Statenpm install @mui/icons-material
     */
    const [inputValue, setInputValue] = useState<string>('')

    /**
     * Handlers
     */
    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setInputValue(e.target.value)
    }

    /**
     * Render
     */
    return (
        <div className={css['input-field']}>
            <input type="text" value={inputValue} onChange={onInputChange}/>
            <SendButton/>
        </div>
    )
}