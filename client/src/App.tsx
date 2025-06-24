import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import Home from "./pages/Home";
import Layout from "./components/Layout";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/auth/register" element={<Register />} />
          <Route path="/auth/login" element={<Login />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
