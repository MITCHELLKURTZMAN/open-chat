import React from "react";

export default MessageSentByMe;

interface Props {
    message: string,
    date: Date
}

function MessageSentByMe(props : Props) {
    return (
        <p className="message me">{props.message}</p>
    );
}
