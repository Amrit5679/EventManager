import Login from "../Components/Login";
import Signup from "../Components/Signup";
import Dashboard from '../Components/Dashboard';
import Header from "../Components/Header";
import Body from "../Components/Body";
import { Provider } from "react-redux";
import { store } from '../store/store';
import Error from "../Components/Error";
import PrivateRoute from "./PrivateRoute";
import { useSelector } from "react-redux";
import { redirect } from "react-router-dom";
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

const AppRouter = () => {
  return (
    <Provider store={store} >
      <Router>
        <Routes>
          <Route path="/" element={
            <>
                 <Header />
                 <Body />
            </>
          } errorElement={<Error />} />
          <Route element={<PrivateRoute />}>
            <Route exact path="/dashboard" element={<Dashboard />} errorElement={<Error/>} />
          </Route>
          <Route exact path="/login" element={<Login />} errorElement={<Error/>}/>
          <Route exact path="/signup" element={<Signup />} errorElement={<Error/>}/>
        </Routes>
      </Router>
    </Provider>
  );
}
export default AppRouter;

