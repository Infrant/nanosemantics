import {ThemeProvider} from '@mui/material/styles';
import ChatBot from "./views/ChatBot";
import css from './App.module.scss'
import {theme} from "./MUITheme";

export default () => {
    return (
        <ThemeProvider theme={theme}>
            <div className={css.container}>
                <ChatBot/>
            </div>
        </ThemeProvider>
    )
}