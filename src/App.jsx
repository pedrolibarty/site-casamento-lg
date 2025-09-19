import { Toaster } from "react-hot-toast";
import { Global } from "./styles/global";
import AppRoutes from "./routes";
import Main from "./pages/Main";

function App() {
  return (
    <>
      <Toaster position="top-right" />
      <Global />
      <Main />
      <AppRoutes />
    </>
  );
}

export default App;
