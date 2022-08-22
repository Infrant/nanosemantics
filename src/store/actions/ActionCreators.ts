import {AppDispatch, AppGetState} from "../store";
import {chatApi} from "../../api/api";
import {getResponseErrorMessage} from "../../utils/utils";
import {
    addMessage,
    chatEventSuccess,
    chatInitError,
    chatInitStart,
    chatInitSuccess,
    chatSetCUID,
    sendMessage,
    sendMessageError,
    sendMessageSuccess
} from "../reducers/ChatSlice";
import {MessageType} from "../../interfaces/ChatTypes";
import {BOT} from "../../constants/constants";

export const chatInit = (cuid = '') => async (dispatch: AppDispatch) => {
    try {
        dispatch(chatInitStart())
        const {data} = await chatApi.chatInit(cuid)
        const {result, error} = data
        if (result) {
            const {cuid} = result
            dispatch(chatSetCUID(cuid))
            dispatch(chatInitSuccess())
            dispatch(chatEvent())
        }
        if (error) {
            if (typeof error === 'object') dispatch(chatInitError(getResponseErrorMessage(error.code, error.message)))
            if (typeof error === 'string') dispatch(chatInitError(error))
        }
    } catch (e) {
        if (e instanceof Error) dispatch(chatInitError(e.message))
    }
}

export const chatEvent = () => async (dispatch: AppDispatch, getState: AppGetState) => {
    try {
        const {cuid} = getState().chatSlice
        const {data} = await chatApi.chatEvent(cuid)
        const {result, error} = data
        if (result) {
            const {cuid, text: {value}} = result
            const message: MessageType = {
                author: BOT,
                message: value
            }
            dispatch(chatSetCUID(cuid))
            const {gotGreetMessage} = getState().chatSlice
            if (!gotGreetMessage) dispatch(addMessage(message))
            dispatch(chatEventSuccess())
        }
        if (error) {
            if (typeof error === 'object') dispatch(chatInitError(getResponseErrorMessage(error.code, error.message)))
            if (typeof error === 'string') dispatch(chatInitError(error))
        }
    } catch (e) {
        if (e instanceof Error) dispatch(chatInitError(e.message))
    }
}

export const chatRequest = (message: string) => async (dispatch: AppDispatch, getState: AppGetState) => {
    try {
        dispatch(sendMessage())
        const {cuid} = getState().chatSlice
        const {data} = await chatApi.chatRequest(cuid, message)
        const {result, error} = data
        if (result) {
            const {cuid, text: {value}} = result
            const message: MessageType = {
                author: BOT,
                message: value
            }
            dispatch(chatSetCUID(cuid))
            dispatch(addMessage(message))
            dispatch(sendMessageSuccess())
        }
        if (error) {
            if (typeof error === 'object') dispatch(sendMessageError(getResponseErrorMessage(error.code, error.message)))
            if (typeof error === 'string') dispatch(sendMessageError(error))
        }
    } catch (e) {
        if (e instanceof Error) dispatch(sendMessageError(e.message))
    }

}