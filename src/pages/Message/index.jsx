import { MessageStyled } from "./style";

const Message = () => {
  return <MessageStyled>
    <h2>Deixe seu recado</h2>
    <img src="/images/ramo-local.png" alt="" />
    <form action="">
        <div className="box-input">
        <span>Seu nome</span>
        <input type="text" />
        </div>
        <div className="box-input">
        <span>Recado</span>
        <input type="text" id="message-input" />
        </div>
        <button>Enviar Recado</button>
    </form>
  </MessageStyled>;
};

export default Message;
