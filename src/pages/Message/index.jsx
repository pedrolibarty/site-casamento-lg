import { AdminContext } from "../../contexts/AdminContext";
import { MessageStyled } from "./style";
import { useContext } from "react";
import Loader from "../Loader";

const Message = () => {
  const {
    name,
    setName,
    content,
    setContent,
    createMessage,
    loadingMsg,
    showToast,
  } = useContext(AdminContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() && content.trim()) {
      createMessage({ name, content });
    } else {
      showToast("Preencha todos os campos!", false);
    }
  };

  return (
    <MessageStyled>
      <h2>Deixe seu recado</h2>
      <img src="/images/ramo-local.png" alt="" />
      <form onSubmit={handleSubmit}>
        <div className="box-input">
          <span>Seu nome</span>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="box-input">
          <span>Recado</span>
          <textarea
            id="message-input"
            rows="4"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        {loadingMsg ? <Loader /> : <button type="submit">Enviar Recado</button>}
      </form>
    </MessageStyled>
  );
};

export default Message;
