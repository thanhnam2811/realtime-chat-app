import People from "../People/People.component";
import Search from "../Search/Search.component";


function PeopleList() {
    return (
        <div id="plist" className="people-list">
            <Search />
            <ul className="list-unstyled chat-list mt-2 mb-0">
                <People active='true' />
                <People online='true'/>
                <People />
                <People />
                <People />
            </ul>
        </div>
    )
}

export default PeopleList;