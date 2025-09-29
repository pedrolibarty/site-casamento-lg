import { createContext, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const GuestContext = createContext();

export const GuestProvider = ({ children }) => {
  const [companions, setCompanions] = useState([]);
  const [originCompanions, setOriginCompanions] = useState([]);
  const [allCompanions, setAllCompanions] = useState([]);
  const [guests, setGuests] = useState([]);
  const [companionLoading, setCompanionLoading] = useState(true);
  const [allCompanionsLoading, setAllCompanionsLoading] = useState(true);
  const [guestsLoading, setGuestsLoading] = useState(true);
  const navigate = useNavigate();

  const api = "https://api-birthday-isis.vercel.app/api/";
  //const api = "http://localhost:3000/api/";

  const getCompanions = async (id_guest) => {
    try {
      const res = await fetch(`${api}companion`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id_guest }),
      });

      const data = await res.json();

      if (data[0] === undefined) {
        setCompanionLoading(false);

        return;
      }

      setCompanions(data);
      setOriginCompanions(data);
      setCompanionLoading(false);
    } catch (error) {
      console.log(error);
      //Entender o que fazer nessa situação
      return;
    }
  };

  const updateCompaion = async () => {
    const changed = companions.filter((comp) => {
      const origin = originCompanions.find((o) => o.id_comp === comp.id_comp);
      return origin && origin.status !== comp.status;
    });

    if (changed.length === 0) {
      toast("Presenças atualizadas!", {
        duration: 4000,
        position: "top-right",
        icon: "✅",
        style: {
          background: "#FFFFFF",
          color: "#000",
        },
      });

      return;
    }

    try {
      const res = await fetch(`${api}update/companion`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(changed),
      });
      await res.json();

      toast("Presenças atualizadas!", {
        duration: 4000,
        position: "top-right",
        icon: "✅",
        style: {
          background: "#FFFFFF",
          color: "#000",
        },
      });

      return;
    } catch (error) {
      toast("Ocorreu um erro!", {
        duration: 4000,
        position: "top-right",
        icon: "⚠️",
        style: {
          background: "#FFFFFF",
          color: "#000",
        },
      });
    }
  };

  const getGuests = async () => {
    try {
      const res = await fetch(`${api}guests`, {
        method: "GET",
      });

      if (!res.ok) {
        toast("Erro ao listar grupos", {
          duration: 4000,
          position: "top-right",
          icon: "⚠️",
          style: {
            background: "#FFFFFF",
            color: "#000",
          },
        });
        return;
      }

      const data = await res.json();

      setGuests(data);
      setGuestsLoading(false);
    } catch (error){
      console.log(error)
      //navigate("/error");
    }
  };

  const getAllCompanions = async () => {
    try {
      const res = await fetch(`${api}all/companion`, {
        method: "GET",
      });

      if (!res.ok) {
        toast("Erro para listar convidados", {
          duration: 4000,
          position: "top-right",
          icon: "⚠️",
          style: {
            background: "#FFFFFF",
            color: "#000",
          },
        });
        return;
      }

      const data = await res.json();

      setAllCompanions(data);
      setAllCompanionsLoading(false)
      return;
    } catch (error) {
      toast("Erro para listar convidados", {
        duration: 4000,
        position: "top-right",
        icon: "⚠️",
        style: {
          background: "#FFFFFF",
          color: "#000",
        },
      });
      return;
    }
  };

  const updateGuest = async (id_guest, ind_env) => {
    try {
      const res = await fetch(`${api}update/guest`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id_guest, ind_env }),
      });

      await res.json();

      if (ind_env === true) {
        toast("Confirmação feita!", {
          duration: 4000,
          position: "top-right",
          icon: "✅",
          style: {
            background: "#FFFFFF",
            color: "#000",
          },
        });
      } else {
        toast("Confirmação removida!", {
          duration: 4000,
          position: "top-right",
          icon: "✅",
          style: {
            background: "#FFFFFF",
            color: "#000",
          },
        });
      }

      return;
    } catch (error) {
      toast("Ocorreu um erro!", {
        duration: 4000,
        position: "top-right",
        icon: "⚠️",
        style: {
          background: "#FFFFFF",
          color: "#000",
        },
      });
    }
  };

  const createCompanions = async (data) => {
    console.log(data)

    try {
      if (!data.agrupamento.name || data.agrupamento.name.trim() === "") {
        toast("Agrupamento vazio!", {
          duration: 4000,
          position: "top-right",
          icon: "⚠️",
          style: {
            background: "#FFFFFF",
            color: "#000",
          },
        });
        return;
      }

      if (data.companions.length === 0) {
        toast("Insira convidados!", {
          duration: 4000,
          position: "top-right",
          icon: "⚠️",
          style: {
            background: "#FFFFFF",
            color: "#000",
          },
        });
        return;
      }

      const filteredCompanions = data.companions.filter(
        (name) => name.trim() !== ""
      );

      if (filteredCompanions.length === 0) {
        toast("Insira convidados!", {
          duration: 4000,
          position: "top-right",
          icon: "⚠️",
          style: {
            background: "#FFFFFF",
            color: "#000",
          },
        });
        return;
      }

      const payload = {
        ...data,
        companions: filteredCompanions,
      };

      const res = await fetch(`${api}create/companion`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const err = await res.json();
        console.error("Erro ao enviar:", err.error || "Erro desconhecido");
        return;
      }

      const result = await res.json();

      toast("Convite criado!", {
          duration: 4000,
          position: "top-right",
          icon: "✅",
          style: {
            background: "#FFFFFF",
            color: "#000",
          },
        });
    } catch (error) {
      console.error("Erro inesperado:", error.message);
    }
  };

  return (
    <GuestContext.Provider
      value={{
        companions,
        getCompanions,
        setCompanions,
        updateCompaion,
        setCompanionLoading,
        guests,
        getGuests,
        getAllCompanions,
        allCompanions,
        setGuests,
        updateGuest,
        createCompanions,
        companionLoading,
        allCompanionsLoading,
        guestsLoading
      }}
    >
      {children}
    </GuestContext.Provider>
  );
};
