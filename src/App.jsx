import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Classes from "./Pages/Classes";
import Services from "./Pages/Services";
import Layout from "./Components/Layout";
import SignUp from "./Pages/SignUp";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/services" element={<Services />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
