import { useContext } from "react";
import { ListStyled } from "./style";
import { AdminContext } from "../../contexts/AdminContext";

const List = () => {
  const { gifts, getCurrentGift } = useContext(AdminContext);

  return (
    <ListStyled>
      <div className="page-top">
        <img src="/images/ramo-list-l.png" alt="" className="ramo-list-l" />
        <h2>Lista de Presentes</h2>
        <img src="/images/ramo-list-r.png" alt="" className="ramo-list-r" />
      </div>
      <p id="guide">
        Presentear os noivos é super simples: basta escolher o presente, definir
        o valor que deseja contribuir e gerar o pagamento via PIX. Pronto!{" "}
        <br /> Seu carinho já fará parte dessa nova fase do casal.
      </p>
      <ul>
        {gifts.map((gift) => {
          const isDisabled = gift.payvalue >= gift.value;

          return (
            <li key={gift.id}>
              <div className="card-img">
                <img src={`/gifts/${gift.url_image}`} alt="" />
              </div>
              <p>{gift.name}</p>
              <span>R$ {gift.value},00</span>
              <button
                onClick={() => !isDisabled && getCurrentGift(gift.id)}
                disabled={isDisabled}
                className={isDisabled ? "disabled-btn" : ""}
              >
                {isDisabled ? "Presenteado" : "Presentear"}
              </button>
            </li>
          );
        })}
      </ul>
    </ListStyled>
  );
};

export default List;
