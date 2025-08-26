import { useContext, useEffect, useState } from "react";
import { PriceStyled } from "./style";
import { AdminContext } from "../../contexts/AdminContext";
import Loader from "../Loader";

const Price = () => {
  const {
    currentGift,
    generatePayment,
    rawPix,
    qrCode,
    switchPix,
    closeModal,
    endValue,
    taxValue,
  } = useContext(AdminContext);
  const [amount, setAmount] = useState("");
  const [rawValue, setRawValue] = useState(0);
  const [timeLeft, setTimeLeft] = useState();

  const handleChange = (e) => {
    let value = e.target.value;
    value = value.replace(/\D/g, "");
    const floatValue = parseFloat(value) / 100 || 0;
    setRawValue(floatValue);
    const formatted = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(floatValue);
    setAmount(formatted);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    generatePayment(rawValue);
    setTimeLeft(8 * 60);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(timeLeft / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (timeLeft % 60).toString().padStart(2, "0");

  return (
    <PriceStyled>
      <div className="modal-container">
        <div className="header-modal">
          <h2>{currentGift.name}</h2>
          <button className="btn-close" onClick={() => closeModal()}>
            <img src="/icons/close.png" alt="" />
          </button>
        </div>

        {switchPix === "inserir" ? (
          <div className="info-gift">
            <form onSubmit={handleSubmit}>
              <span>Quanto deseja presentear?</span>
              <span>
                valor faltando: R${" "}
                {(currentGift.value - currentGift.payvalue).toFixed(2)}
              </span>
              <input
                type="text"
                value={amount}
                onChange={handleChange}
                placeholder="R$ 0,00"
              />
              <button type="submit">Presentear</button>
            </form>
          </div>
        ) : switchPix === "loading" ? (
          <Loader />
        ) : (
          <div className="sec-pix">
            <div className="infos_pay">
              <span>Valor a presentear: R$ {endValue.toFixed(2)}</span>
              <span>Taxa de pagamento: R$ {taxValue.toFixed(2)}</span>
            </div>
            <span className="timer">{minutes}:{seconds}</span>
            <img src={qrCode} alt="" />
            <button
              onClick={() => {
                navigator.clipboard.writeText(rawPix);
              }}
            >
              Copiar Pix
            </button>
          </div>
        )}
      </div>
    </PriceStyled>
  );
};
export default Price;
