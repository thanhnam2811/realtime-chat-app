import ChatHeader from "../ChatHeader/ChatHeader.component";
import ChatHistory from "../ChatHistory/ChatHistory.component";
import ChatMessage from "../ChatMessage/ChatMessage.component";


function Chat() {
    return (
        <div className="chat">
            <ChatHeader />

            <ChatHistory />
            
            <ChatMessage />
        </div>
    )
}

export default Chat;