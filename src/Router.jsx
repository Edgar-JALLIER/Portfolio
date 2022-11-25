import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./pages/Error"
import Home from "./pages/Home"

function Router () {
    return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Error />} />
    </Routes>
  </BrowserRouter>
    );
}

export default Router;