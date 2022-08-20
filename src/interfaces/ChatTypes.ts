import {BOT, USER} from "../constants/constants";

export type author = typeof USER | typeof BOT

export interface MessageType {
    author: author
    message: string
}