import { Routes, Route } from "react-router-dom";
import Main from "../pages/Main";
import Error from "../pages/Error";
import Manager from "../pages/Manager";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/:id_guest" element={<Main />} />
      <Route path="/error" element={<Error />} />
      <Route path="*" element={<Error />} />
      <Route path="/admin" element={<Manager />} />
    </Routes>
  );
}
