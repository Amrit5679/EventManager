import AddEvent from "./AddEvent";
import Event from "./Event";
import Header from "./Header";
import "../styles/Dashboard.css"

const Dashboard = () => {
    return(
        <>
            <Header />
            <div className="event-container">
                <AddEvent />
                <Event />
            </div>
        </>
    )
}

export default Dashboard;