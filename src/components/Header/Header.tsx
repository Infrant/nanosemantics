import css from './Header.module.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faComments} from '@fortawesome/free-regular-svg-icons'
import {faRotateRight} from '@fortawesome/free-solid-svg-icons'
import IconButton from '@mui/material/IconButton';

export default () => {
    return (
        <div className={css['header']}>
            <div className={css['header__caption']}>
                <FontAwesomeIcon icon={faComments} size='2x'/>
            </div>
            <IconButton color='inherit' size='large' className={css['header__update__wrapper']}>
                <FontAwesomeIcon icon={faRotateRight} className={css['header__update']} size='xs'/>
            </IconButton>
        </div>
    )
}