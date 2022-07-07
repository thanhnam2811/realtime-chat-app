

function People(props) {
    return (
        <li className={'clearfix ' + (props.active ? 'active' : '')}>
            <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="avatar" />
            <div className="about">
                <div className="name">Vincent Porter</div>
                <div className="status">
                    <i className="fa fa-circle online" /> online
                </div>
            </div>
        </li>
    )
}

export default People;