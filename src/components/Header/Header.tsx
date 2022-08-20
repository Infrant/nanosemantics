import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faComments} from '@fortawesome/free-regular-svg-icons'
import {faRotateRight} from '@fortawesome/free-solid-svg-icons'
import IconButton from '@mui/material/IconButton';
import css from './Header.module.scss'

export default React.memo(() => {
        return (
            <div className={css['header']}>
                <div className={css['header__caption']}>
                    <FontAwesomeIcon icon={faComments} size='2x'/>
                    <IconButton
                        color='secondary'
                        size='large'
                        className={css['header__update__wrapper']}
                    >
                        <FontAwesomeIcon
                            icon={faRotateRight}
                            className={css['header__update']}
                            size='xs'
                        />
                    </IconButton>
                </div>
            </div>
        )
    }
)