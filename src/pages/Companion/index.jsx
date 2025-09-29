import { useContext, useState } from "react";
import { GuestContext } from "../../contexts/GuestContext";
import { CompanionStyled } from "./style";

const Companion = () => {
  const { allCompanions } = useContext(GuestContext);
  const [filterSend, setFilterSend] = useState("all");
  const [nameFilter, setNameFilter] = useState("");

  const companionFiltered = allCompanions.filter((c) => {
    const matchStatus =
      filterSend === "yes"
        ? c.status === true
        : filterSend === "no"
        ? c.status === false
        : filterSend === "null"
        ? c.status === null
        : true;

    const matchName = c.name
      .toLowerCase()
      .includes(nameFilter.trim().toLowerCase());

    return matchStatus && matchName;
  });

  return (
    <CompanionStyled>
        <div className="filter-buttons">
        <button
          onClick={() => setFilterSend("all")}
          className={filterSend === "all" ? "active" : ""}
        >
          Todos
        </button>
        <button
          onClick={() => setFilterSend("yes")}
          className={filterSend === "yes" ? "active" : ""}
        >
          Confirmados
        </button>
        <button
          onClick={() => setFilterSend("no")}
          className={filterSend === "no" ? "active" : ""}
        >
          Recusados
        </button>
        <button
          onClick={() => setFilterSend("null")}
          className={filterSend === "null" ? "active" : ""}
        >
          S/ Resposta
        </button>
      </div>

      <input
        type="text"
        placeholder="Filtrar por nome"
        value={nameFilter}
        onChange={(e) => setNameFilter(e.target.value)}
        className="filter-input"
      />

      <ul>
        {companionFiltered.map((c) => {
          return (
            <li key={c.id_comp}>
              <div className="content">
                <h3>{c.name}</h3>
                <div className="square">
                  <div className="line"></div>
                  <p>
                    {c.status === true
                      ? "Confirmado"
                      : c.status === false
                      ? "Recusado"
                      : "Sem resposta"}
                  </p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </CompanionStyled>
  );
};

export default Companion;
