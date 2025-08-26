import { LocalStyled } from "./style";

const Local = () => {
  return (
    <LocalStyled>
      <h2>Local</h2>
      <img src="/images/ramo-local.png" alt="" className="ramo" />
      <h3>Paróquia Sant'ana</h3>
      <p>Esperamos por vocês às 19h! </p>
      <p>
        Após a cerimônia, vocês serão guiados para o local da festa. Iremos
        festejar até o amanhecer.
      </p>
      <div className="images-local">
        <img src="/images/local-1.png" alt="" />
        <img src="/images/local-2.png" alt="" />
      </div>
      <h4>Endereço</h4>
      <span>
        Av. Pe. Leonardo Senne 227 (Bairro Altinópolis), Governador Valadares,
        MG, 35053-100
      </span>
      <div
        className="link"
        onClick={() =>
          window.open("https://maps.app.goo.gl/rLt91163fcJPHWdF8", "_blank")
        }
      >
        <img src="/icons/icon-map.png" alt="" />
        <h5>Maps</h5>
      </div>
    </LocalStyled>
  );
};

export default Local;
