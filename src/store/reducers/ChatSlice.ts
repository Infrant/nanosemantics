import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ChatState, MessageType} from "../../interfaces/ChatTypes";

const initialState: ChatState = {
    cuid: '',
    error: '',
    isLoading: false,
    isSendingMessage: false,
    gotGreetMessage: false,
    messages: [],
}

const chatSlice = createSlice({
    name: 'chatSlice',
    initialState,
    reducers: {
        addMessage(state, action: PayloadAction<MessageType>) {
            state.messages.push(action.payload)
        },
        chatSetCUID(state, action: PayloadAction<string>) {
            if (action.payload == state.cuid) return
            state.cuid = action.payload ?? state.cuid
        },
        chatInitStart(state) {
            state.isLoading = true
        },
        chatInitSuccess(state) {
            state.error = ''
        },
        chatInitError(state, action: PayloadAction<string>) {
            state.isLoading = false
            state.error = action.payload
        },
        chatEventSuccess(state) {
            state.isLoading = false
            state.gotGreetMessage = true
        },
        sendMessage(state) {
            state.isSendingMessage = true
        },
        sendMessageSuccess(state) {
            state.isSendingMessage = false

        },
        sendMessageError(state, action: PayloadAction<string>) {
            state.isSendingMessage = false
            state.error = action.payload
        },
        clearHistory() {
            return initialState
        },
    },
})

export default chatSlice.reducer
export const {
    addMessage,
    clearHistory,
    chatInitStart,
    chatInitSuccess,
    chatInitError,
    chatSetCUID,
    chatEventSuccess,
    sendMessage,
    sendMessageSuccess,
    sendMessageError
} = chatSlice.actions