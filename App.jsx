import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import Menu from "./pages/Menu";
import { CartProvider } from "./context/CartContext";
import LanguageSwitcher from "./components/LanguageSwitcher";
import './i18n';

function App() {
  return (
    <CartProvider>
      <Router>
        <Suspense fallback={<LoadingScreen />}>
          <Navbar />
          <LanguageSwitcher />
          <Routes>
            <Route path="/" element={<Menu />} />
            {/* يمكنك إضافة المزيد من الصفحات هنا */}
          </Routes>
        </Suspense>
      </Router>
    </CartProvider>
  );
}

export default App;
