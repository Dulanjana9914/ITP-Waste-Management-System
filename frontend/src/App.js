import "./App1.css";
import React from "react";
import Navbar from "./UserManagement/Navbar";
import Home from "./UserManagement/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./UserManagement/Login";
import Register from "./UserManagement/Register";
import PrivateRoute from "./hocomponents/privateRoute";


import UnPrivateRoute from './hocomponents/unPrivateRoute';
import Admin from './UserManagement/Admin';
import Profile from './UserManagement/Profile';
import UserProfile from './UserManagement/Userprofile';
import EditProfile from './UserManagement/EditProfile';
import DeleteProfile from './UserManagement/DeleteProfile';
import UserProfileclient from './UserManagement/UserProfileclient'
import GetReport from './UserManagement/GetReport'

//marketplace

import AddRequest from "./MarketPlaceManagement/AddRequest";
import UpdateRequest from "./MarketPlaceManagement/UpdateRequest";
import Dashboard from "./MarketPlaceManagement/Dashboard";
import ItemList from "./MarketPlaceManagement/ItemList";
import DeleteRequest from "./MarketPlaceManagement/DeleteRequest";
import Checkout from "./MarketPlaceManagement/Checkout";

//pickup

import DisplayReq from "./PickupFunction/DisplayReq";
import DisplayOrder from "./PickupFunction/DisplayOrder";
import RouteOrderAdd from "./PickupFunction/RouteOrderAdd";
import EditRouteOrder from "./PickupFunction/EditRouteOrder";
import DeleteRouteOrder from "./PickupFunction/DeleteRouteOrder";
import DisplayRouterOrder from "./PickupFunction/DisplayRouteOrder";
import RouteReqAdd from "./PickupFunction/RouteReqAdd";
import DisplayRouteRequest from "./PickupFunction/DisplayRouteRequest";
import EditRouteRequest from "./PickupFunction/EditRouteRequest";
import DeleteRouteRequest from "./PickupFunction/DeleteRouteRequest";
import CollectDisplay from "./PickupFunction/CollectDisplay";
import CollectDelete from "./PickupFunction/CollectDelete";

//deliver


import DriverProfile from "./DeliveryManagement/DriverProfile";
import DriverRegister from "./DeliveryManagement/DriverRegister";
import View from "./DeliveryManagement/View";
import CollectItem from "./DeliveryManagement/CollectItem";
import SelectDriver from "./DeliveryManagement/SelectDriver";

import CheckDrivers from "./DeliveryManagement/CheckDrivers";

import DriverProfile from './DeliveryManagement/DriverProfile';
import DriverRegister from './DeliveryManagement/DriverRegister';
import View from './DeliveryManagement/View';
import CollectItem from './DeliveryManagement/CollectItem';
import SelectDriver from './DeliveryManagement/SelectDriver';
import ViewOrders from './DeliveryManagement/ViewOrders';
import CheckDrivers from './DeliveryManagement/CheckDrivers';


//recycle facility

import home from "./RecycleFacilityManagement/home";
import discompanies from "./RecycleFacilityManagement/discompanies";
//import discompanyitems from './RecycleFacilityManagement/discompanyitems'
import insertcompany from "./RecycleFacilityManagement/insertcompany";
import insertitem from "./RecycleFacilityManagement/insertitem";
import upcompany from "./RecycleFacilityManagement/upcompany";
//import add from './RecycleFacilityManagement/insertitem'
import update from "./RecycleFacilityManagement/updateitem";
import additemscapacity from "./RecycleFacilityManagement/additemscapacity";

//staff

import CreatePost from "./staffmanage/CreatePost";
import EditPost from "./staffmanage/EditPost";
import Itemdis from "./staffmanage/Home";
import PostDetails from "./staffmanage/PostDetails";
import CreateRecord from "./staffmanage/CreateRecord";
import EditRecord from "./staffmanage/EditRecord";
import Record from "./staffmanage/Record";
import RecordDetails from "./staffmanage/RecordDetails";
import Attend from "./staffmanage/Attend";
import AttendDetails from "./staffmanage/AttendDetails";
import CreateAttend from "./staffmanage/CreateAttend";

//vehicle

import Header from "./vehicle/Header";
import AddVehicle from "./vehicle/AddVehicle";
import AllVehicles from "./vehicle/AllVehicles";
import RepairVehicle from "./vehicle/RepairVehicle";
import VehicleDetails from "./vehicle/UpdateVehicleDetails";
import DeleteVehicle from "./vehicle/DeleteVehicle";
import SideBar from "./vehicle/SideBar";
import HomePage from "./vehicle/HomePage";

//payment

import CreditCardForm from "./Payment/CreditCardForm";
import Header2 from "./Payment/Header2";

import Myearning from "./Payment/Myearning";
import PaymentData from "./Payment/PaymentData";
import PaymentData2 from "./Payment/PaymentData2"; //new
import UserPayForm from "./Payment/UserPayForm";
import AddSalary from "./Payment/AddSalary";
import SalaryData from "./Payment/SalaryData";

import SalaryData2 from "./Payment/SalaryData2";
import DeleteSalary from "./Payment/DeleteSalary";
import DeleteCard from "./Payment/DeleteCard"; //des

import MySalary from "./Payment/MySalary";
import MyPayments from "./Payment/MyPayments";
import CompanyPurchase from "./Payment/CompanyPurchase";
import EditCard from "./Payment/EditCard";
import EditSalary2 from "./Payment/EditSalary2";
import PurchaseData from "./Payment/PurchaseData";
import PurchaseData2 from "./Payment/PurchaseData2"; //new
import EditPurchase from "./Payment/EditPurchase"; //new
import DeletePurchase from "./Payment/DeletePurchase"; //new
import MyCards from "./Payment/MyCards";
import MyCards2 from "./Payment/MyCards2";
import EditPaymentData from "./Payment/EditPaymentData";//new
import DeletePayment from "./Payment/DeletePayment";//new



function App() {
  return (
    <Router>
      <SideBar />
      <Navbar />

      {/* user */}

      <PrivateRoute
        path="/profile/:id"
        roles={["admin", "User"]}
        component={UserProfile}
      />
      <PrivateRoute
        path="/editprofile/:id"
        roles={["admin", "User"]}
        component={EditProfile}
      />
      <PrivateRoute
        path="/deleteprofile/:id"
        roles={["admin", "User"]}
        component={DeleteProfile}
      />
      <PrivateRoute
        path="/clientprofile/:id"
        roles={["admin", "User"]}
        component={UserProfileclient}
      />

      <PrivateRoute path="/report" roles={["admin","User"]} component={GetReport}/>

      <UnPrivateRoute path="/login" component={Login}/>
      <UnPrivateRoute path="/register" component={Register}/>
      <PrivateRoute path="/admin" roles={["admin"]} component={Admin}/>
      <PrivateRoute path="/profiles" roles={["admin"]} component={Profile}/>
      <PrivateRoute path="/profile/:id" roles={["admin","User"]} component={UserProfile}/>
      <PrivateRoute path="/editprofile/:id" roles={["admin","User"]} component={EditProfile}/>
      <PrivateRoute path="/deleteprofile/:id" roles={["admin","User"]} component={DeleteProfile}/>
      <PrivateRoute path="/clientprofile/:id" roles={["admin","User"]} component={UserProfileclient}/>


      {/* marketplace */}

      <PrivateRoute
        path="/addRequest"
        roles={["admin", "User"]}
        exact
        component={AddRequest}
      />
      <PrivateRoute
        path="/UpdateRequest"
        roles={["admin", "User"]}
        exact
        component={UpdateRequest}
      />
      <PrivateRoute
        path="/dashboard"
        roles={["admin", "User"]}
        exact
        component={Dashboard}
      />
      <PrivateRoute
        path="/deleteRequest"
        roles={["admin", "User"]}
        exact
        component={DeleteRequest}
      />

      <PrivateRoute
        path="/checkout"
        roles={["admin", "User"]}
        exact
        component={Checkout}
      />

      <PrivateRoute
        path="/itemlist"
        roles={["admin", "User"]}
        exact
        component={ItemList}
      />

      {/* pickup */}


      <Route path="/req" exact component={DisplayReq} />
      <PrivateRoute
        path="/addOrder/route"
        roles={["admin"]}
        exact
        component={RouteOrderAdd}
      />
      <PrivateRoute
        path="/order"
        roles={["admin"]}
        exact
        component={DisplayOrder}
      />
      <PrivateRoute
        path="/addReq/route"
        roles={["admin"]}
        exact
        component={RouteReqAdd}
      />
      <PrivateRoute
        path="/routeReq"
        roles={["admin"]}
        exact
        component={DisplayRouteRequest}
      />
      <PrivateRoute
        path="/editReq/route"
        roles={["admin"]}
        exact
        component={EditRouteRequest}
      />
      <PrivateRoute
        path="/deeleteRe/route"
        roles={["admin"]}
        exact
        component={DeleteRouteRequest}
      />
      <PrivateRoute
        path="/routeOrder"
        roles={["admin"]}
        exact
        component={DisplayRouterOrder}
      />
      <PrivateRoute
        path="/editOrder/route"
        roles={["admin"]}
        exact
        component={EditRouteOrder}
      />
      <PrivateRoute
        path="/deleteOrder/route"
        roles={["admin"]}
        exact
        component={DeleteRouteOrder}
      />

      <PrivateRoute
        path="/collect"
        roles={["admin"]}
        exact
        component={CollectItem}
      />
      <PrivateRoute
        path="/collect/dis"
        roles={["admin"]}
        exact
        component={CollectDisplay}
      />
      <PrivateRoute
        path="/collect/delete"
        roles={["admin"]}
        exact
        component={CollectDelete}
      />

      {/* delivery */}

      <PrivateRoute
        path="/driver/:dId/reg"
        roles={["User"]}
        exact
        component={DriverRegister}
      />
      <PrivateRoute
        path="/driver/prof/:id"
        roles={["User"]}
        exact
        component={DriverProfile}
      />
      <PrivateRoute
        path="/routeReq/allRouteReq"
        roles={["admin"]}
        exact
        component={CheckDrivers}
      />
      <PrivateRoute
        path="/driver/allprof"
        roles={["admin"]}
        exact
        component={SelectDriver}
      />
      <PrivateRoute
        path="/delivery/display"
        roles={["User"]}
        exact
        component={View}
      />
      <PrivateRoute
        path="/driver/collect"
        roles={["User"]}
        exact
        component={CollectItem}
      />

      {/* recycle facility */}

      <PrivateRoute path="/itemdisp" roles={["admin"]} exact component={home} />
      <PrivateRoute path="/add" roles={["admin"]} component={insertitem} />
      <PrivateRoute path="/update/:id" roles={["admin"]} component={update} />
      <PrivateRoute
        path="/addcompany"
        roles={["admin"]}
        component={insertcompany}
      />
      <PrivateRoute
        path="/discompanies"
        roles={["admin"]}
        component={discompanies}
      />
      <PrivateRoute
        path="/upcompany/:id"
        roles={["admin"]}
        component={upcompany}
      />
      <PrivateRoute
        path="/addcompanyitems"
        roles={["admin"]}
        component={additemscapacity}
      />

      {/* staff */}

      <PrivateRoute
        path="/staffdisp"
        roles={["admin"]}
        exact
        component={Itemdis}
      />
      <PrivateRoute path="/addpost" roles={["admin"]} component={CreatePost} />
      <PrivateRoute path="/edit/:id" roles={["admin"]} component={EditPost} />
      <PrivateRoute
        path="/post/:id"
        roles={["admin"]}
        component={PostDetails}
      />
      <PrivateRoute
        path="/srecord"
        roles={["admin"]}
        exact
        component={Record}
      />
      <PrivateRoute
        path="/addrecord"
        roles={["admin"]}
        component={CreateRecord}
      />
      <PrivateRoute
        path="/editrecord/:id"
        roles={["admin"]}
        component={EditRecord}
      />
      <PrivateRoute
        path="/record/:id"
        roles={["admin"]}
        component={RecordDetails}
      />
      <PrivateRoute
        path="/staffattend"
        roles={["admin", "User"]}
        exact
        component={Attend}
      />
      <PrivateRoute
        path="/addattend"
        roles={["admin", "User"]}
        component={CreateAttend}
      />
      <PrivateRoute
        path="/attend/:id"
        roles={["admin", "User"]}
        component={AttendDetails}
      />

      {/* vehicle */}

      <div className="container" ms-5>
        <Route path="/" exact component={HomePage} />
        <PrivateRoute
          path="/addvehicle"
          roles={["admin"]}
          exact
          component={AddVehicle}
        />
        <PrivateRoute
          path="/all"
          roles={["admin"]}
          exact
          component={AllVehicles}
        />
        <PrivateRoute
          path="/details"
          roles={["admin"]}
          component={VehicleDetails}
        />
        <PrivateRoute
          path="/delete"
          roles={["admin"]}
          component={DeleteVehicle}
        />
        <PrivateRoute
          path="/addrepair"
          roles={["admin"]}
          exact
          component={RepairVehicle}
        />
      </div>

      {/* payment */}

      <div className="App">
        <editCard />
        <PrivateRoute
          path="/credit-card-validation/MyEarning"
          roles={["admin", "User"]}
          component={Myearning}
        />

        <PrivateRoute
          path="/credit-card-validation/addSalary"
          roles={["admin"]}
          component={AddSalary}
        />

        <PrivateRoute
          path="/credit-card-validation/SalaryData"
          roles={["admin"]}
          component={SalaryData}
        />

        <PrivateRoute
          path="/credit-card-validation/UserPayForm"
          roles={["admin", "User"]}
          component={UserPayForm}
        />

        <PrivateRoute
          path="/credit-card-validation/PaymentData"
          roles={["admin", "User"]}
          component={PaymentData}
        />

        <PrivateRoute
          path="/credit-card-validation/addcard"
          roles={["admin", "User"]}
          component={CreditCardForm}
        />

        <PrivateRoute
          path="/credit-card-validation/editCard"
          roles={["admin", "User"]}
          component={Header3}
        />

        <PrivateRoute
          path="/credit-card-validation/allCards"
          roles={["admin", "User"]}
          component={Header2}
        />

          <PrivateRoute path="/req" roles={["admin"]} exact component={DisplayReq} />
          <PrivateRoute path="/addOrder/route" roles={["admin"]} exact component={RouteOrderAdd} />
          <PrivateRoute path="/order" roles={["admin"]} exact component={DisplayOrder} />
          <PrivateRoute path="/addReq/route" roles={["admin"]} exact component={RouteReqAdd} />
          <PrivateRoute path= "/routeReq" roles={["admin"]} exact component={DisplayRouteRequest} />
          <PrivateRoute path = "/editReq/route" roles={["admin"]} exact component={EditRouteRequest} />
          <PrivateRoute path="/deeleteRe/route" roles={["admin"]} exact component={DeleteRouteRequest} />
          <PrivateRoute path="/routeOrder" roles={["admin"]} exact component={DisplayRouterOrder} />
          <PrivateRoute path = "/editOrder/route" roles={["admin"]} exact component={EditRouteOrder} />
          <PrivateRoute path="/deleteOrder/route" roles={["admin"]} exact component={DeleteRouteOrder} />

          <PrivateRoute path="/collect" roles={["admin"]} exact component={CollectItem} />
          <PrivateRoute path="/collect/dis" roles={["admin"]} exact component={CollectDisplay} />
          <PrivateRoute path="/collect/delete" roles={["admin"]} exact component={CollectDelete} />

        {/* delivery */}

          <PrivateRoute path = "/driver/:dId/reg" roles={["User"]} exact component={DriverRegister} />
          <PrivateRoute path="/driver/prof/:id" roles={["User"]} exact component={DriverProfile} />
          <PrivateRoute path="/routeReq/allRouteReq" roles={["admin"]} exact component={CheckDrivers} />
          <PrivateRoute path="/driver/allprof" roles={["admin"]} exact component={SelectDriver} />
          <PrivateRoute path="/trip/addTrip" roles={["admin"]} exact component={SelectDriver} />
          <PrivateRoute path="/delivery/display/:id" roles={["User"]} exact component={View} />
          <PrivateRoute path="/driver/collect" roles={["User"]} exact component={CollectItem} />
          <PrivateRoute path="/trip/check/:id" roles={["User"]} exact component={ViewOrders} />

          {/* recycle facility */}

          <PrivateRoute path='/itemdisp' roles={["admin"]} exact component={home}/>
          <PrivateRoute path="/add" roles={["admin"]} component={insertitem}/>
          <PrivateRoute path='/update/:id' roles={["admin"]} component={update}/>
          <PrivateRoute path='/addcompany' roles={["admin"]} component={insertcompany}/>
          <PrivateRoute path='/discompanies' roles={["admin"]} component={discompanies}/>
          <PrivateRoute path='/upcompany/:id' roles={["admin"]} component={upcompany}/>
          <PrivateRoute path='/addcompanyitems' roles={["admin"]} component={additemscapacity}/>

          {/* staff */}

          <PrivateRoute path="/staffdisp" roles={["admin"]} exact component={Itemdis}/>
          <PrivateRoute path="/addpost" roles={["admin"]} component={CreatePost}/>
          <PrivateRoute path="/edit/:id" roles={["admin"]} component={EditPost}/>
          <PrivateRoute path="/post/:id" roles={["admin"]} component={PostDetails}/> 
          <PrivateRoute path="/srecord" roles={["admin"]} exact component={Record}/>
          <PrivateRoute path="/addrecord" roles={["admin"]} component={CreateRecord}/>
          <PrivateRoute path="/editrecord/:id" roles={["admin"]} component={EditRecord}/>
          <PrivateRoute path="/record/:id" roles={["admin"]} component={RecordDetails}/>       
          <PrivateRoute path="/staffattend" roles={["admin","User"]} exact component={Attend}/>
          <PrivateRoute path="/addattend" roles={["admin","User"]} component={CreateAttend}/>
          <PrivateRoute path="/attend/:id" roles={["admin","User"]} component={AttendDetails}/>

          {/* vehicle */}

          <div className ="container" ms-5>
          <Route path="/" exact component={HomePage} />
          <PrivateRoute path="/addvehicle" roles={["admin"]} exact component={AddVehicle} />
          <PrivateRoute path="/all" roles={["admin"]} exact component={AllVehicles} />
          <PrivateRoute path="/details" roles={["admin"]} component={VehicleDetails} />
          <PrivateRoute path="/delete" roles={["admin"]} component={DeleteVehicle} />
          <PrivateRoute path="/addrepair" roles={["admin"]} exact component={RepairVehicle} />
          </div>

          {/* payment */}

          <div className="App">

        
          <PrivateRoute path="/credit-card-validation/deletesalary" roles={["admin"]} component={DeleteSalary}/>
          <PrivateRoute path="/credit-card-validation/DeleteCard" roles={["admin","User"]} component={DeleteCard}/>
          <PrivateRoute path="/credit-card-validation/addSalary" roles={["admin"]} component={AddSalary}/>
          <PrivateRoute path="/credit-card-validation/EditPurchase" roles={["admin"]} component={EditPurchase}/>
          <PrivateRoute path="/credit-card-validation/DeletePurchase" roles={["admin"]} component={DeletePurchase}/>
          <PrivateRoute path="/credit-card-validation/PaymentData2" roles={["admin","User"]} component={PaymentData2}/>
          <PrivateRoute path="/credit-card-validation/EditPaymentData" roles={["admin","User"]} component={EditPaymentData}/>
          <PrivateRoute path="/credit-card-validation/SalaryData" roles={["admin"]} component={SalaryData}/>
          <PrivateRoute path="/credit-card-validation/DeletePayment" roles={["admin"]} component={DeletePayment}/>

          <PrivateRoute path="/credit-card-validation/SalaryData2" roles={["admin"]} component={SalaryData2}/>

          <PrivateRoute path="/credit-card-validation/EditSalary2" roles={["admin"]} component={EditSalary2}/>

          <PrivateRoute path="/credit-card-validation/UserPayForm" roles={["admin","User"]} component={UserPayForm}/>

          <PrivateRoute path="/credit-card-validation/PaymentData" roles={["admin","User"]} component={PaymentData}/>


          <PrivateRoute path="/credit-card-validation/addcard" roles={["admin","User"]} component={CreditCardForm}/>


          <PrivateRoute path="/credit-card-validation/allCards" roles={["admin","User"]} component={Header2}/>

          <PrivateRoute path="/credit-card-validation/EditCard/" roles={["admin","User"]} component={EditCard}/>

          <PrivateRoute path="/credit-card-validation/MySalary/" roles={["admin","User"]} component={MySalary}/>

          <PrivateRoute path="/credit-card-validation/MyPayments/" roles={["admin","User"]} component={MyPayments}/>

          <PrivateRoute path="/credit-card-validation/CompanyPurchase/" roles={["admin"]} component={CompanyPurchase}/>

          <PrivateRoute path="/credit-card-validation/PurchaseData/" roles={["admin"]} component={PurchaseData}/>
          <PrivateRoute path="/credit-card-validation/PurchaseData2/" roles={["admin"]} component={PurchaseData2}/>

          <PrivateRoute path="/credit-card-validation/MyCards/" roles={["admin","User"]} component={MyCards}/>
          <PrivateRoute path="/credit-card-validation/MyCards2/" roles={["admin","User"]} component={MyCards2}/>


      </div>
    </Router>
  );
}

export default App;
