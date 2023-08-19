import React, { useEffect } from "react";
import "./App.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from "react-router-dom";
import "./scss/volt.scss";
import { useDispatch, useSelector } from "react-redux";
import { isUserLoggedIn, getInitialData, getCategory } from "./actions";
import PrivateRoute from "./components/Private/PrivateRoute";
import Sidebar from "./components/Sidebar";
// import Home  from "./pages/Home";
import Category from "./pages/Category/Category";
import AllProducts from "./pages/Products/AllProducts";
import CreateProduct from "./pages/Products/CreateProduct.js";
import SignIn from "./pages/SignIn/SignIn";
import DashboardOverview from "./pages/dashboard/DashboardOverview";
import UpdateProduct from "./pages/Products/UpdateProduct";
import contactUs from "./pages/Forms/ContactUs/contactUs";
import contactDetails from "./pages/Forms/ContactUs/contactDetails";
import TradeIn from "./pages/Forms/TradeIn/TradeIn";
import TradeInDetails from "./pages/Forms/TradeIn/TradeInDetails";
import CreditApproval from "./pages/Forms/Credit-Approval/CreditApproval";
import CreditApprovalDetails from "./pages/Forms/Credit-Approval/CreditApprovalDetails";
import IndividualCreditForm from "./pages/Forms/IndividualCreditForm/IndividualCreditForm";
import IndividualCreditFormDetails from "./pages/Forms/IndividualCreditForm/IndividualCreditFormDetails";
import { getAdminProduct } from "./actions/productAction";

function App() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
    }
    if (auth.authenticate) {
      dispatch(getInitialData());
      dispatch(getAdminProduct());
      dispatch(getCategory());
    }
  }, [dispatch, auth.authenticate]);

  return (
    // <Home/>
    <div className="App">
      {auth.authenticate && (
        <>
          <Sidebar />
        </>
      )}
      <Switch>
        {/* <main className="content"> */}
          <PrivateRoute path="/" exact component={DashboardOverview} />
          <PrivateRoute path="/category/create" component={Category} />
          <PrivateRoute path="/product/all" component={AllProducts} />
          <PrivateRoute path="/product/create" component={CreateProduct} />
          <PrivateRoute
            path="/product/update/:productid"
            component={UpdateProduct}
          />
          <PrivateRoute path="/ContactUs/contactUs" component={contactUs} />
          <PrivateRoute
            path="/contactUs/contactDetails"
            component={contactDetails}
          />
          <PrivateRoute path="/trade-in-jani-motors" component={TradeIn} />
          <PrivateRoute
            path="/TradeIn/TradeInDetails"
            component={TradeInDetails}
          />
          <PrivateRoute path="/Credit-Approval/CreditApprovalDetails/:id" component={CreditApprovalDetails} />
          <PrivateRoute path="/Credit-Approval" component={CreditApproval} />
          <PrivateRoute path="/IndividualCreditForm/IndividualCreditFormDetails/:id" component={IndividualCreditFormDetails} />
          <PrivateRoute path="/IndividualCreditForm" component={IndividualCreditForm} />

          <Route path="/signin" component={SignIn} />
          {/* <Route path="**" component={PageNotFound}/> */}
        {/* </main> */}
      </Switch>
    </div>
  );
}

export default App;
