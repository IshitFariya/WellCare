import "./App.css";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Login from "components/Authentication/Login/Login";
import Home from "components/Home/Home";
import Signup from "components/Authentication/Signup/Signup";
import Landing from "components/Landing/Landing";
import DoctorRegistration from "components/DoctorRegistration/DoctorRegistration";
import ResetPassword from "components/PasswordSetup/ResetPassword";
import ForgotPassword from "components/PasswordSetup/ForgotPassword";
import DoctorSearch from "components/DoctorSearch/Home";
import MyAccount from "components/MyAccount/MyAccount";
import SlotBooking from "components/SlotBooking/SlotBooking";
import Checkout from "components/PaymentCheckout/Checkout";
import Gateway from "components/PaymentGateway/Gateway";
import Success from "components/PaymentSuccess/Success";
import Profile from "components/Profile/Profile";
import Chat from "components/Chat/Chat";
import ContactsProvider from "context/ContactsContext";

function App() {
  return (
    <>
      {/* <ContactsProvider>    */}
      <Router>
        <Routes>
          {/* Landing Page */}
          <Route exact path="/" element={<Landing />} />

          {/* Home */}
          <Route exact path="/home" element={<Home />} />

          {/* Login */}
          <Route exact path="/login" element={<Login />} />

          {/* Sign up */}
          <Route exact path="/signup" element={<Signup />} />

          {/* Doctor Search Page */}
          <Route exact path="/doctorSearch" element={<DoctorSearch />} />

          {/* Doctor Profile Page */}
          <Route exact path="/doctorProfile" element={<Profile />} />

          {/* SlotBooking Page */}
          <Route exact path="/slotBook" element={<SlotBooking />} />

          {/* Appointment Summary Page */}
          <Route exact path="/checkoutPayment" element={<Checkout />} />

          {/* Payment Gateway  Page */}
          <Route exact path="/paymentGateway" element={<Gateway />} />

          {/* Payment Success Page */}
          <Route exact path="/paymentSuccess" element={<Success />} />

          {/*Doctor registration page*/}
          <Route
            exact
            path="/doctorRegistration"
            element={<DoctorRegistration />}
          />

          {/* forgot password page */}
          <Route exact path="/forgotPassword" element={<ForgotPassword />} />

          {/* my account page */}
          <Route exact path="/myAccount" element={<MyAccount />} />

          {/* reset password page */}
          <Route
            exact
            path="/resetPassword/:token"
            element={<ResetPassword />}
          />

          {/* chat  */}
          <Route
            exact
            path="/chat"
            element={<Chat />}
          />
        </Routes>
      </Router>
      {/* </ContactsProvider> */}
    </>
  );
}

export default App;
