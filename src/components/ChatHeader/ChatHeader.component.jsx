

function ChatHeader() {
    return (
        <div className="chat-header clearfix">
            <div className="row">
                <div className="col-lg-6">
                    <a data-toggle="modal" data-target="#view_info">
                        <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="avatar" />
                    </a>
                    <div className="chat-about">
                        <h6 className="m-b-0">Aiden Chavez</h6>
                        <small>Last seen: 2 hours ago</small>
                    </div>
                </div>
                {/* <div className="col-lg-6 hidden-sm text-right">
                        <a href="" className="btn btn-outline-secondary"><i className="fa fa-camera" /></a>
                        <a href="" className="btn btn-outline-primary"><i className="fa fa-image" /></a>
                        <a href="" className="btn btn-outline-info"><i className="fa fa-cogs" /></a>
                        <a href="" className="btn btn-outline-warning"><i className="fa fa-question" /></a>
                    </div> */}
            </div>
        </div>
    )
}

export default ChatHeader;