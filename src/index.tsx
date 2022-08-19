import * as ReactDOM from "react-dom/client";
import {Provider} from "react-redux";
import {store} from "./redux";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById('root') as Element)
root.render(
    <Provider store={store}>
        <App/>
    </Provider>
)