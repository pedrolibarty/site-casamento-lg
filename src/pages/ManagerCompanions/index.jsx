import { useContext, useEffect, useState } from "react";
import { GuestContext } from "../../contexts/GuestContext";
import { ManagerCompanionsStyled } from "./style";
import Invitation from "../Invitation";
import Companion from "../Companion";
import Form from "../Form";
import Loading from "../Loading";

const ManagerCompanions = () => {
  const {allCompanions, loading } =
    useContext(GuestContext);

  const [list, setList] = useState("convite");

  return (
    <ManagerCompanionsStyled>
      <ul className="status">
        <li>
          <h3>Todos</h3>
          <div className="row">{allCompanions.length}</div>
        </li>
        <li>
          <h3>Confirmados</h3>
          <div className="row">
            {(
              (allCompanions.filter((c) => c.status).length /
                allCompanions.length) *
              100
            ).toFixed(0)}
            % <div className="line"></div>
            {allCompanions.filter((c) => c.status).length}
          </div>
        </li>
        <li>
          <h3>Recusados</h3>
          <div className="row">
            {(
              (allCompanions.filter((c) => c.status === false).length /
                allCompanions.length) *
              100
            ).toFixed(0)}
            % <div className="line"></div>{" "}
            {allCompanions.filter((c) => c.status === false).length}
          </div>
        </li>
        <li>
          <h3>Sem resposta</h3>
          <div className="row">
            {(
              (allCompanions.filter((c) => c.status === null).length /
                allCompanions.length) *
              100
            ).toFixed(0)}
            % <div className="line"></div>{" "}
            {allCompanions.filter((c) => c.status === null).length}
          </div>
        </li>
      </ul>
      <div className="main-btn">
        <button
          className={list === "convite" ? "companion-active" : "companion"}
          onClick={() => setList("convite")}
        >
          Convites
        </button>
        <button
          className={list === "convidado" ? "companion-active" : "companion"}
          onClick={() => setList("convidado")}
        >
          Convidados
        </button>
        <button
          className={list === "criar" ? "companion-active" : "companion"}
          onClick={() => setList("criar")}
        >
          Adicionar convidado
        </button>
      </div>
      <h3 className="title">
        {list === "convite"
          ? "Lista de convites"
          : list === "convidado"
          ? "Lista de presença"
          : "Criação de convites"}
      </h3>
      {list === "convite" ? (
        <Invitation />
      ) : list === "convidado" ? (
        <Companion />
      ) : (
        <Form />
      )}
    </ManagerCompanionsStyled>
  );
};

export default ManagerCompanions;
