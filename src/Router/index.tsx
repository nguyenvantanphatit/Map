import { Routes, Route, BrowserRouter } from "react-router-dom";
import Map from "../Pages/GoogleMap/Map";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Map />} />
      </Routes>
    </BrowserRouter>
  );
}
