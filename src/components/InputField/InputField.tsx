import React, {useState} from 'react'
import css from './InputField.module.scss'

export default () => {
    const [inputValue, setInputValue] = useState<string>('')

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setInputValue(e.target.value)
    }


    return (
        <div className={css['input-field']}>
            <input type="text" value={inputValue} onChange={onInputChange}/>
            <button>отправить</button>
        </div>
    )
}