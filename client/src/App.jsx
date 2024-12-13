import { useEffect } from "react";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import {
  unstable_HistoryRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import history from "./history";
import "./reset.css";
import { connect } from "react-redux";
import { getUserDataRequest } from "./actions/actionCreators";

function App(props) {
  useEffect(() => {
    if (!props.user && localStorage.getItem("accessToken")) {
      props.getUserDataRequest();
    }
  }, []);

  useEffect(() => {
    if (props.notification) {
      const { body, createdAt, type } = props.notification;
      toast[type](body, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }, [props.notification]);

  return (
    <>
      <Router history={history}>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/messenger" element={<Dashboard />} />
        </Routes>
      </Router>
      <ToastContainer />
      {props.error && <p>Ooops, something goes wrong</p>}
    </>
  );
}

const mapStateToProps = ({ user, error, notification }) => ({
  user,
  error,
  notification,
});
const mapDispatch = {
  getUserDataRequest,
};

export default connect(mapStateToProps, mapDispatch)(App);
