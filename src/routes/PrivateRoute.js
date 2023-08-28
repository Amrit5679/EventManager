import { useSelector } from "react-redux";
import { Outlet,Navigate} from "react-router-dom";

const PrivateRoute = () => {
    const loggedIndex = useSelector((state => state.indexReducer[0]));
    return(
        loggedIndex != -1 ? <Outlet /> :<Navigate to="/login" />
    );
}

export default PrivateRoute;