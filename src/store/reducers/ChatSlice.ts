import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {MessageType} from "../../interfaces/ChatTypes";

interface ChatState {
    messages: MessageType[],
    isLoading: boolean
}

const initialState: ChatState = {
    messages: [],
    isLoading: false
}

const chatSlice = createSlice({
    name: 'chatSlice',
    initialState,
    reducers: {
        addMessage(state, action: PayloadAction<MessageType>) {
            state.messages.push(action.payload)
        },
        clearHistory() {
            return initialState
        }
    },
})

export default chatSlice.reducer
export const {addMessage, clearHistory} = chatSlice.actions