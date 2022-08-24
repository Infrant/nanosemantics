import axios from 'axios';
import {api} from "../constants/constants";
import {
    EventChatPayload,
    InitChatPayload,
    InitChatResponse,
    RequestChatPayload,
    RequestChatResponse,
} from "../interfaces/ChatTypes";

const uuid = api.UUID
const euid = api.EUID

const instance = axios.create({
    baseURL: api.BASE_URL,
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
        return instance.post<InitChatResponse>(api.CHAT_INIT, data)
    },
    chatEvent(cuid: string) {
        const data: EventChatPayload = {
            cuid,
            euid
        }
        return instance.post<RequestChatResponse>(api.CHAT_EVENT, data)
    },
    chatRequest(cuid: string, text: string) {
        const data: RequestChatPayload = {
            cuid,
            text
        }
        return instance.post<RequestChatResponse>(api.CHAT_REQUEST, data)
    }
}

