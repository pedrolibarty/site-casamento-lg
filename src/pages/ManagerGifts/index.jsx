import { useContext, useState } from "react";
import { AdminContext } from "../../contexts/AdminContext";
import { StyledManagerGifts } from "./style";

const ManagerGifts = () => {
  const { gifts, payGifts } = useContext(AdminContext);

  const [openGifts, setOpenGifts] = useState({});
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  const toggleGift = (id) => {
    setOpenGifts((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const totalExpected = gifts.reduce((acc, i) => acc + i.value, 0);
  const totalReceived = gifts.reduce((acc, i) => acc + i.payvalue, 0);

  const filteredGifts = gifts.filter((g) => {
    const matchesSearch = g.name.toLowerCase().includes(search.toLowerCase());
    const isCompleted = g.payvalue >= g.value;
    if (filterStatus === "completed" && !isCompleted) return false;
    if (filterStatus === "pending" && isCompleted) return false;
    return matchesSearch;
  });

  console.log(payGifts)

  return (
    <StyledManagerGifts>
      <ul className="result">
        <li>
          <h3>Previsto</h3>
          <div className="row-value">R$ {totalExpected.toFixed(2)}</div>
        </li>
        <li>
          <h3>Recebido</h3>
          <div className="row-value">R$ {totalReceived.toFixed(2)}</div>
        </li>
        <li>
          <h3>Percentual</h3>
          <div className="row-value">
            {((totalReceived / totalExpected) * 100).toFixed(2)}%
          </div>
        </li>
      </ul>

      <div>
        <input
          type="text"
          placeholder="Buscar por nome"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="filter-input"
        />
      </div>

      <div className="main-btn">
        <button
          className={filterStatus === "all" ? "gift-active" : "gift"}
          onClick={() => setFilterStatus("all")}
        >
          Todos
        </button>
        <button
          className={filterStatus === "completed" ? "gift-active" : "gift"}
          onClick={() => setFilterStatus("completed")}
        >
          Completos
        </button>
        <button
          className={filterStatus === "pending" ? "gift-active" : "gift"}
          onClick={() => setFilterStatus("pending")}
        >
          Pendentes
        </button>
      </div>

      <h3>Presentes</h3>

      <ul className="list-gifts">
        {filteredGifts.map((g) => {
          const isOpen = openGifts[g.id] || false;
          return (
            <li
              className="line-gift"
              key={g.id}
              onClick={() => toggleGift(g.id)}
              style={{ cursor: "pointer" }}
            >
              <p className="name">{g.name}</p>
              <div className="box-infos">
                <p>Esperado: R$ {g.value.toFixed(2)}</p>
                <p>Recebido: R$ {g.payvalue.toFixed(2)}</p>
                <p>{((g.payvalue / g.value) * 100).toFixed(2)}%</p>
              </div>

              {isOpen && (
                <ul className="list-pay">
                  {payGifts
                    .filter((p) => p.id === g.id)
                    .map((p) => (
                      <li className="line-pay" key={p.idPagamento}>
                        {p.namePix} - R$ {p.payvalue.toFixed(2)}
                      </li>
                    ))}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </StyledManagerGifts>
  );
};

export default ManagerGifts;
