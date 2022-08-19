import ChatBot from "./views/ChatBot";
import css from './App.module.scss'

export default () => {
    return (
        <div className={css.container}>
            <ChatBot/>
        </div>
    )
}