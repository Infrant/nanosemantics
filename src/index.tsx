import * as ReactDOM from "react-dom/client";
import {Provider} from "react-redux";
import {PersistGate} from 'redux-persist/integration/react'
import {store} from "./store/store";
import App from "./App";
import {persistStore} from "redux-persist";

let persistor = persistStore(store)

const root = ReactDOM.createRoot(document.getElementById('root') as Element)
root.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App/>
        </PersistGate>
    </Provider>
)
