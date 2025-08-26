import { Toaster } from "react-hot-toast";
import Dashboard from "./pages/Dashboard";
import Description from "./pages/Description";
import List from "./pages/List";
import Local from "./pages/Local";
import Main from "./pages/Main";
import Message from "./pages/Message";
import PixQRCode from "./pages/Pix";
import Teste from "./pages/Teste";
import { Global } from "./styles/global";

function App() {
  return (
    <>
      <Toaster position="top-right" />
      <Global />
      <Main />
      {/*<Teste />*/}
    </>
  );
}

export default App;
