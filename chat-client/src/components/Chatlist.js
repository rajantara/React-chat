import React from 'react'
import Chatitem from './Chatitem'

export default function Chatlist(props) {
    const chatli = props.data.map((item,index) =>
        <Chatitem
            index = {index}
            key = {item.id}
            name={item.name}
            message={item.message}
            sent={item.sent}
            time={item.time}
            resend={() => props.resend(item.id, item.name, item.message)}
            hapus={() => props.remove(item.id)}
        />)

    return (
        <div>{chatli}</div>
    )
}