import { useContext, useEffect, useState } from "react";
import { GuestContext } from "../../contexts/GuestContext";
import { ManagerStyled } from "./style";
import ManagerCompanions from "../ManagerCompanions";
import { AdminContext } from "../../contexts/AdminContext";
import Loading from "../Loading";
import ManagerGifts from "../ManagerGifts";

const Manager = () => {
  const { getGuests, getAllCompanions, guestsLoading, allCompanionsLoading } =
    useContext(GuestContext);
  const { getGifts, getPayGifts } = useContext(AdminContext);

  const [indPage, setIndPage] = useState(true);

  useEffect(() => {
    getGuests();
    getAllCompanions();
    getGifts();
    getPayGifts();
  }, []);

  return guestsLoading || allCompanionsLoading ? (
    <Loading />
  ) : (
    <ManagerStyled>
      <h2>Administração</h2>
      <div className="btn-page">
        <button
          className={indPage === true ? "active" : ""}
          onClick={() => setIndPage(true)}
        >
          Convidados
        </button>
        <button
          className={indPage === false ? "active" : ""}
          onClick={() => setIndPage(false)}
        >
          Presentes
        </button>
      </div>
      {indPage === true ? <ManagerCompanions /> : <ManagerGifts />}
    </ManagerStyled>
  );
};

export default Manager;
