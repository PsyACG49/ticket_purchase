import { BrowserRouter, Route, Routes } from "react-router-dom";
import PaymentPage from "./pages/paymentPage/PaymentPage";
import SuccessPage from "./pages/successPage/SuccessPage";
import HomePage from "./pages/homePage/HomePage";

import "./App.css";
import HomeLayout from "./layout/HomeLayout";
import MasterclassPage from "./pages/masterclassPage/MasterclassPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/checkout" element={<PaymentPage />} />
          <Route path="/masterclass" element={<MasterclassPage />} />
        </Route>
        <Route path="/success" element={<SuccessPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
