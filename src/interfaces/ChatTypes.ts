import {BOT, USER} from "../constants";

export type author = typeof USER | typeof BOT

export interface MessageType {
    author: author
    message: string
}