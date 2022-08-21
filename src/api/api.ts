import axios from 'axios';
import {
    EventChatPayload,
    InitChatPayload,
    InitChatResponse,
    RequestChatPayload,
    RequestChatResponse,
} from "../interfaces/ChatTypes";

const uuid = '772c9859-4dd3-4a0d-b87d-d76b9f43cfa4' // Id инфа
const euid = '00b2fcbe-f27f-437b-a0d5-91072d840ed3' // Событие Ready

const instance = axios.create({
    baseURL: 'https://biz.nanosemantics.ru/api/2.1/json',
});

export const chatApi = {
    chatInit(cuid: string) {
        let data: InitChatPayload = {
            uuid
        }
        if (cuid) {
            data = {
                ...data,
                cuid
            }
        }
        return instance.post<InitChatResponse>('Chat.init', data)
    },
    chatEvent(cuid: string) {
        const data: EventChatPayload = {
            cuid,
            euid
        }
        return instance.post<RequestChatResponse>('Chat.event', data)
    },
    chatRequest(cuid: string, text: string) {
        const data: RequestChatPayload = {
            cuid,
            text
        }
        return instance.post<RequestChatResponse>('Chat.request', data)
    }
}

