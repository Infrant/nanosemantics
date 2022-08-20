import React from "react";
import css from './MessageField.module.scss'

export default React.memo(
    () => {
        return (
            <div className={css['message-field']}>
            </div>
        )
    }
)