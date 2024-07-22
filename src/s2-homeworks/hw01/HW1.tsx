import React from 'react'
import Message from './message/Message'
import MessageSender from './message-sender/MessageSender'
import s2 from '../../s1-main/App.module.css'
import FriendMessage from './friend-message/FriendMessage'
import avatar from './avatar.png'

type UserType = {
    avatar: string
    name: string
}

type LocalMessageType = {
    text: string
    time: string
}

export type MessageType = {
    id: number
    user: UserType
    message: LocalMessageType
}

export const message0: MessageType = {
    id: 0,
    user: {
        avatar: avatar,
        name: 'Aidar Ibraev',
    },
    message: {
        text: 'Hello my dear friend!',
        time: '19:54',
    },
}
export const friendMessage0: MessageType = {
    id: 100,
    user: {
        avatar: avatar,
        name: 'Agbar Anvarbekov',
    },
    message: {
        text: 'Hello! How are you?',
        time: '19:56',
    },
}

const HW1 = () => {
    return (
        <div id={'hw1'} className={s2.hw_1}>
            <div className={s2.hwTitle}>Hometask № 1</div>
            <div className={s2.hw}>
                <div>
                    <Message message={message0} />
                    <FriendMessage message={friendMessage0} />
                </div>

                <MessageSender M={Message} />
            </div>
        </div>
    )
}

export default HW1
