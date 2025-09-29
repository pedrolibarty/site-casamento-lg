import { useContext, useState } from "react";
import { InvitationStyled } from "./style";
import { GuestContext } from "../../contexts/GuestContext";
import toast from "react-hot-toast";

const Invitation = () => {
  const { guests, setGuests, updateGuest } = useContext(GuestContext);
  const [filterSend, setFilterSend] = useState("all");
  const [nameFilter, setNameFilter] = useState("");

  const copy = (id_guest, name) => {
    const texto = `

    ✨ Querido(a) ${name},

    Ficamos imensamente felizes em saber que você estará conosco em um dos dias mais importantes das nossas vidas. Sua presença tornará nosso casamento ainda mais especial e inesquecível. 💍💚

    Para facilitar a organização, deixamos abaixo o link para confirmação de presença:
    https://site-casamento-lg.vercel.app/${id_guest}

    Prazo máximo de confirmação: 19 de outubro!

    Com gratidão e carinho,
    Lavínia & Gean
    `;

    navigator.clipboard
      .writeText(texto)
      .then(
        toast("Convite copiado!", {
          duration: 4000,
          position: "top-right",
          icon: "✅",
          style: {
            background: "#FFFFFF",
            color: "#000",
          },
        })
      )
      .catch((err) => {
        toast("Ocorreu um erro!", {
          duration: 4000,
          position: "top-right",
          icon: "⚠️",
          style: {
            background: "#FFFFFF",
            color: "#000",
          },
        });
      });
  };

  const guestFiltered = guests.filter((g) => {
    const matchStatus =
      filterSend === "yes"
        ? g.ind_env === true
        : filterSend === "no"
        ? g.ind_env === false
        : true;

    const matchName = g.name
      .toLowerCase()
      .includes(nameFilter.trim().toLowerCase());

    return matchStatus && matchName;
  });

  const confirm = (id, ind) => {
    const updated = guests.map((g) =>
      g.id_guest === id ? { ...g, ind_env: !g.ind_env } : g
    );
    setGuests(updated);
    updateGuest(id, !ind);
  };

  return (
    <InvitationStyled>
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
          Enviados
        </button>
        <button
          onClick={() => setFilterSend("no")}
          className={filterSend === "no" ? "active" : ""}
        >
          N/ Enviados
        </button>
      </div>

      <input
        type="text"
        placeholder="Filtrar por nome"
        value={nameFilter}
        onChange={(e) => setNameFilter(e.target.value)}
        className="filter-input"
      />

      <ul className="convites">
        {guestFiltered.map((g) => {
          return (
            <li className="convite-line" key={g.id_guest}>
              <div className="container">
                <div className="content" onClick={() => copy(g.id_guest, g.name)}>
                  <h2>{g.name}</h2>
                </div>
                <div className="send">
                  <p>Enviado?</p>
                  <div
                    className={`box ${g.ind_env === true ? "send" : ""}`}
                    onClick={() => confirm(g.id_guest, g.ind_env)}
                  >
                    {g.ind_env === true && (
                      <img src="/icons/icon-yes.png" alt="" />
                    )}
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </InvitationStyled>
  );
};

export default Invitation;
