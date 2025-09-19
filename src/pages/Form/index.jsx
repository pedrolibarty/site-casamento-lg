import { useContext, useState } from "react";
import { FormStyled } from "./style";
import { GuestContext } from "../../contexts/GuestContext";

const Form = () => {
  const { guests, createCompanions} = useContext(GuestContext);
  const [count, setCount] = useState(1);
  const [companions, setCompanions] = useState([""]);
  const [useExistingGroup, setUseExistingGroup] = useState(true);
  const [selectedGroupId, setSelectedGroupId] = useState("");
  const [newGroupName, setNewGroupName] = useState("");

  const handleCompanionChange = (index, value) => {
    const updated = [...companions];
    updated[index] = value;
    setCompanions(updated);
  };

  const handleAdd = () => {
    setCount((prev) => prev + 1);
    setCompanions((prev) => [...prev, ""]);
  };

  const handleRemove = () => {
    if (count > 1) {
      setCount((prev) => prev - 1);
      setCompanions((prev) => prev.slice(0, -1));
    }
  };

  const handleSubmit = () => {
    const finalCompanions = companions.filter((c) => c.trim() !== "");

    const agrupamento = useExistingGroup
      ? guests.find((g) => g.id_guest === selectedGroupId)
      : { name: newGroupName, id_guest: "" };

    const result = {
      companions: finalCompanions,
      agrupamento,
    };
    createCompanions(result)
  };

  return (
    <FormStyled>
      <form onSubmit={(e) => e.preventDefault()}>
        {Array.from({ length: count }).map((_, index) => (
          <input
            key={index}
            type="text"
            placeholder={`Convidado ${index + 1}`}
            value={companions[index] || ""}
            onChange={(e) => handleCompanionChange(index, e.target.value)}
            className="input-comp"
          />
        ))}
        <div className="btn-control">
          <button type="button" onClick={handleAdd}>
            + Adicionar
          </button>
          <button type="button" onClick={handleRemove}>
            - Remover
          </button>
        </div>
        <div className="option">
          <label>
            <input
              type="radio"
              name="agrupamentoOption"
              checked={useExistingGroup}
              onChange={() => setUseExistingGroup(true)}
            />
            Usar agrupamento existente
          </label>

          <label>
            <input
              type="radio"
              name="agrupamentoOption"
              checked={!useExistingGroup}
              onChange={() => setUseExistingGroup(false)}
            />
            Criar novo agrupamento
          </label>
        </div>
        {useExistingGroup ? (
          <select
            value={selectedGroupId}
            onChange={(e) => setSelectedGroupId(e.target.value)}
          >
            {guests.map((group) => (
              <option key={group.id_guest} value={group.id_guest}>
                {group.name}
              </option>
            ))}
          </select>
        ) : (
          <input
            type="text"
            placeholder="Nome do novo agrupamento"
            value={newGroupName}
            onChange={(e) => setNewGroupName(e.target.value)}
            className="input-group"
          />
        )}
        <div>
          <button type="button" onClick={handleSubmit} className="btn-sent">
            Adicionar convidados
          </button>
        </div>
      </form>
    </FormStyled>
  );
};

export default Form;
