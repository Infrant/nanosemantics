import {BOT, USER} from "../constants/constants";

export type author = typeof USER | typeof BOT

export interface MessageType {
    author: author
    message: string
}

export interface ChatState {
    error: string
    cuid: string
    isLoading: boolean
    isSendingMessage: boolean
    gotGreetMessage: boolean
    messages: MessageType[]
}

export type InitChatPayload = {
    uuid: string
    cuid?: string
}

export interface InitChatResponse  {
    result?: {
        cuid: string
    }
    error?: {
        code: string
        message: string
    }
}

export interface RequestChatResponse  {
    result?: {
        cuid: string
        text: {
            value: string
        }
    }
    error?: {
        code: string
        message: string
    }
}

export type RequestChatPayload = {
    cuid: string
    text: string
}

export type EventChatPayload = {
    cuid: string
    euid?: string
}