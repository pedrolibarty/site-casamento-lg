import { useContext, useEffect } from "react";
import Dashboard from "../Dashboard";
import Description from "../Description";
import List from "../List";
import Local from "../Local";
import Message from "../Message";
import { MainStyled } from "./style";
import { AdminContext } from "../../contexts/AdminContext";
import Price from "../Price";

const Main = () => {
  const {getGifts, isModal, setGifts} = useContext(AdminContext)

  useEffect(() => {
    getGifts()

    //setGifts([{name: "Cooktop de última geração", url_image: "cooktop-plastico.png", value: 5050, payvalue: 50, id: "011"}])
  }, [])

  return (
    <MainStyled>
      {isModal && (<Price />)}
      <Dashboard />
      <Description />
      <Local />
      <List />
      <Message />
      
      {/*<div className="add">
        <h3>
          Nosso grande dia está se aproximando!
          <br/> Estamos preparando cada detalhe
          com muito carinho e, em breve, teremos novas atualizações por aqui!
          <br/>Um abraço, Lavínia e Gean ❤️
        </h3>
      </div>*/}
    </MainStyled>
  );
};

export default Main;
