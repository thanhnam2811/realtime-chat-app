import Message from "../Message/Message.component";


function ChatHistory() {
    return (
        <div className="chat-history">
            <ul className="m-b-0">
                <Message />
                <li className="clearfix">
                    <div className="message-data">
                        <span className="message-data-time">10:12 AM, Today</span>
                    </div>
                    <div className="message other-message">Are we meeting today?</div>
                </li>
                <li className="clearfix">
                    <div className="message-data">
                        <span className="message-data-time">10:15 AM, Today</span>
                    </div>
                    <div className="message other-message">Project has been already finished and I have results
                        to show you.</div>
                </li>
            </ul>
        </div>
    )
}

export default ChatHistory;