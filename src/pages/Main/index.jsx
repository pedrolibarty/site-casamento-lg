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
      <div className="add">
        <h3>
          Nosso grande dia está se aproximando!
          <br/> Estamos preparando cada detalhe
          com muito carinho e, em breve, teremos novas atualizações por aqui!
          <br/>Um abraço, Lavínia e Gean ❤️
        </h3>
      </div>
    </MainStyled>
  );
};

export default Main;
