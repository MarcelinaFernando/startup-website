// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Portfolio from "./pages/Portfolio";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      {/* HEADER aparece em todas as páginas */}
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>

      {/* FOOTER aparece em todas as páginas */}
      <Footer />
    </Router>
  );
}

export default App;
