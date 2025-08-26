import { createContext, useState } from "react";
import { QrCodePix } from "qrcode-pix";
import toast from "react-hot-toast";

export const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
  const [gifts, setGifts] = useState([]);
  const [currentGift, setCurrentGift] = useState();
  const [qrCode, setQrCode] = useState("");
  const [rawPix, setRawPix] = useState("");
  const [isModal, setIsModal] = useState(false);
  const [switchPix, setSwitchPix] = useState("inserir");
  const [endValue, setEndValue] = useState(0);
  const [taxValue, setTaxValue] = useState(0);
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [loadingMsg, setLoadingMsg] = useState(false);

  const api = "http://localhost:3000/api/";

  const getGifts = async () => {
    try {
      const res = await fetch(`${api}gifts`, {
        method: "GET",
      });

      if (!res.ok) {
        console.log("Erro");

        return;
      }

      const data = await res.json();

      setGifts(data);
      return;
    } catch (error) {
      showToast("Ocorreu um erro ao carregar a página!", false);
      return;
    }
  };

  const generatePix = async (value) => {
    const qrCodePix = QrCodePix({
      version: "01",
      key: "vianalacerda1002@gmail.com",
      name: "Lavínia Pereira Viana",
      city: "Governador Valadares",
      transactionId: "40028922",
      message: "",
      value: value,
    });

    const rawPixStr = qrCodePix.payload();
    const qrCodeBase64 = await qrCodePix.base64();

    setRawPix(rawPixStr);
    setQrCode(qrCodeBase64);
    setSwitchPix("pix");
  };

  const getCurrentGift = (id) => {
    setCurrentGift(gifts.filter((g) => g.id === id)[0]);
    setIsModal(true);
  };

  const closeModal = () => {
    setIsModal(false);
    setSwitchPix("inserir");
    setCurrentGift({});
  };

  const verifyPayment = async (id) => {
    try {
      const res = await fetch(`${api}verify/payment`, {
        method: "GET",
      });

      if (!res.ok) {
        showToast("Ocorreu um erro ao verificar pagamento", false);
        return;
      }

      const data = await res.json();

      const matchPayment = data.find((p) => p.paymentID === id);

      if (matchPayment) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      showToast("Ocorreu um erro ao verificar pagamento", false);
      return;
    }
  };

  const createPayment = async (value, ident) => {
    try {
      const res = await fetch(`${api}create/payment`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          value: value,
          id_gift: currentGift.id,
          ind_payment: ident,
        }),
      });

      if (!res.ok) {
        showToast("Ocorreu um erro ao gerar pagamento", false);
        return;
      }

      const data = await res.json();

      return data.id;
    } catch (error) {
      showToast("Ocorreu um erro ao gerar pagamento", false);
      return;
    }
  };

  const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const verifyPaymentWithRetries = async (idPayment) => {
    const startTime = Date.now();
    const maxTime = 8 * 60 * 1000;
    const interval = 90 * 1000;

    while (Date.now() - startTime < maxTime) {
      await wait(interval);

      const result = await verifyPayment(idPayment);

      if (result === true) {
        getGifts();
        closeModal();
        showToast("Pagamento efetuado!", true);
        return;
      }
    }

    closeModal();
    return;
  };

  const generatePayment = async (value) => {
    setSwitchPix("loading");
    try {
      const res = await fetch(`${api}payments`, {
        method: "GET",
      });

      if (!res.ok) {
        showToast("Ocorreu um erro ao carregar os pagamentos", false);
        return;
      }

      const data = await res.json();

      const pendingPayments = data.filter((p) => p.status_payment === "P");

      const existingFinals = pendingPayments.map((p) =>
        Number((p.value + p.ind_payment).toFixed(2))
      );

      let new_ident;
      let valueFinal;

      do {
        new_ident = Math.random() * (0.15 - 0.02) + 0.02;
        new_ident = Number(new_ident.toFixed(2));
        valueFinal = Number((value + new_ident).toFixed(2));
      } while (existingFinals.includes(valueFinal));

      generatePix(valueFinal);
      setEndValue(value);
      setTaxValue(new_ident);

      const idPayment = await createPayment(value, new_ident);

      verifyPaymentWithRetries(idPayment);

      return;
    } catch (error) {
      showToast("Ocorreu um erro ao carregar os pagamentos", false);
      return;
    }
  };

  const createMessage = async (data) => {
    setLoadingMsg(true);
    try {
      const res = await fetch(`${api}create/message`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        showToast("Ocorreu um erro ao criar mensagem", false);
        return;
      }

      setContent("");
      setName("");

      setLoadingMsg(false);
      return;
    } catch (error) {
      showToast("Ocorreu um erro ao criar mensagem", false);
      setLoadingMsg(false);
      return;
    }
  };

  const showToast = (msg, status) => {
    const emoji = status ? "✅" : "⚠️";

    toast(msg, {
      duration: 5000,
      position: "top-right",
      icon: emoji,
      style: {
        background: "#FFFFFF",
        color: "#000",
      },
    });
    return;
  };

  return (
    <AdminContext.Provider
      value={{
        getGifts,
        gifts,
        setGifts,
        currentGift,
        generatePix,
        qrCode,
        rawPix,
        switchPix,
        isModal,
        setIsModal,
        getCurrentGift,
        closeModal,
        generatePayment,
        endValue,
        taxValue,
        name,
        setName,
        content,
        setContent,
        createMessage,
        loadingMsg,
        showToast,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};
