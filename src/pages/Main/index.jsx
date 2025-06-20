import Dashboard from "../Dashboard";
import Description from "../Description";
import List from "../List";
import Local from "../Local";
import Message from "../Message";
import { MainStyled } from "./style";

const Main = () => {
  return (
    <MainStyled>
      <Dashboard />
      {/*<Description />
      <Local />
      <List />
      <Message />
      */}
    </MainStyled>
  );
};

export default Main;
