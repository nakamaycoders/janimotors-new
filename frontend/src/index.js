import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import { positions, transitions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import ScrollToTop from './components/layout/ScrollToTop'
import { HelmetProvider } from 'react-helmet-async';
// import { hydrate, render } from "react-dom";


const options = {
  timeout: 5000,
  position: positions.BOTTOM_CENTER,
  transition: transitions.SCALE,
};

window.store = store;
// const rootElement = document.getElementById("root");
// if (rootElement.hasChildNodes()) {
//   hydrate(<App />, rootElement);
// } else {
//   render(<App />, rootElement);
// }
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
    <AlertProvider template={AlertTemplate} {...options}>
       <ScrollToTop> 
         <HelmetProvider>
        <App />
        </HelmetProvider>
      </ScrollToTop>
    </AlertProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
