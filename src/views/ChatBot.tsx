import css from './ChatBot.module.scss'
import Header from "../components/Header/Header";
import InputField from "../components/InputField/InputField";
import MessageField from "../components/MessageField/MessageField";

export default () => {
    return (
        <div className={css['chat-bot']}>
            <Header/>
            <MessageField/>
            <InputField/>
        </div>
    )
}