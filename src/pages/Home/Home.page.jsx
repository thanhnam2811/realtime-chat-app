import Chat from "../../components/Chat/Chat.component";
import PeopleList from "../../components/PeopleList/PeopleList.component";

function Home() {
    return (
        <div className="container">
            <div className="row clearfix">
                <div className="col-lg-12">
                    <div className="card chat-app">
                        <PeopleList />
                        
                        <Chat />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;