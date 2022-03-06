import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import App from './src/container/app/app'
import Header from './src/component/Header';
import store from "./src/redux/store/store";
// import Footer from "./src/component/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>, 
    document.getElementById("root")
    );