import { useState } from "react";

const Manager = () => {
    const { getGuests, getAllCompanions, getGifts, setPayGifts } =
    useContext(GuestContext);

    const [ indPage, setIndPage ] = useState(true);

    useEffect(() => {
    getGuests();
    getAllCompanions();
    getGifts();
    setPayGifts();
  }, []);

    return (
        <ManagerStyled>
            <h2>Administração</h2>
            <div className="btn-page">
                <button
                className={indPage ? true : "active": ""}
                onClick={() => setIndPage(true)}
                >Convidados</button>
                <button
                className={indPage ? false : "active": ""}
                onClick={() => setIndPage(false)}
                >Presentes</button>
            </div>
        {indPage === true ? (
            <ManagerCompanions />
        ) : (<ManagerGifts />)}
        </ManagerStyled>
    )
}