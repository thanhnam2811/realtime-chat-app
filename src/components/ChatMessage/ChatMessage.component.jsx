

function ChatMessage() {
    return (
        <div className="chat-message clearfix">
            <div className="input-group mb-0">
                <div className="input-group-prepend">
                    <span className="input-group-text"><i className="fa fa-send" /></span>
                </div>
                <input type="text" className="form-control" placeholder="Enter text here..." />
            </div>
        </div>
    )
}

export default ChatMessage;