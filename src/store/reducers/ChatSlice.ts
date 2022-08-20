import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {MessageType} from "../../interfaces/ChatTypes";

interface ChatState {
    messages: MessageType[],
    isLoading: boolean
}

const initialState: ChatState = {
    messages: [
        {author: 'user', message: 'some text'},
        {author: 'user', message: 'some text'},
        {author: 'user', message: 'some text'},
        {author: 'user', message: 'some text'},
        {author: 'user', message: 'some text'},
        {author: 'user', message: 'some text'},
        {author: 'user', message: 'some text'},
        {author: 'user', message: 'some text'},
        {author: 'user', message: 'some text'},
        {author: 'user', message: 'some text'},
    ],
    isLoading: false
}

const chatSlice = createSlice({
    name: 'chatSlice',
    initialState,
    reducers: {
        addMessage(state, action: PayloadAction<MessageType>) {
            state.messages.push(action.payload)
        }
    }
})

export default chatSlice.reducer
export const {addMessage} = chatSlice.actions