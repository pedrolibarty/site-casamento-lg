import { CompanionsStyled } from "./style"

const Companions = () => {
    const { companions, setCompanions, updateCompaion } =
    useContext(GuestContext);


    const confirm = (id) => {
    const updated = companions.map((g) =>
      g.id_comp === id ? { ...g, status: true } : g
    );

    setCompanions(updated);
  };

  const inative = (id) => {
    const updated = companions.map((g) =>
      g.id_comp === id ? { ...g, status: false } : g
    );

    setCompanions(updated);
  };

    return (
        <CompanionsStyled>
            <p>Queridos amigos e familiares, estamos muito felizes em compartilhar este momento especial com vocês e queremos que nosso casamento seja ainda mais inesquecível com a presença das pessoas que amamos. Para nos ajudar na organização, pedimos que confirmem sua presença selecionando “Sim” para quem irá e “Não” para quem não poderá comparecer, e em seguida clicar no botão “Confirmar sua presença!” abaixo da lista.</p>

            <ul>
        {companions.map((g) => {
          return (
            <li key={g.id_comp}>
              <div className="content">
                <div className="name">
                  <img src="/icons/concha-1.png" alt="" />
                  <h3>{g.name}</h3>
                </div>
                <div className="answer">
                  <div className="yes">
                    Sim
                    <div
                      className={`box ${g.status === true ? "ativo" : ""}`}
                      onClick={() => confirm(g.id_comp)}
                    >
                      {g.status === true && (
                        <img src="/icons/icon-yes.png" alt="" />
                      )}
                    </div>
                  </div>
                  <div className="no">
                    Não
                    <div
                      className={`box ${g.status === false ? "inativo" : ""}`}
                      onClick={() => inative(g.id_comp)}
                    >
                      {g.status === false && (
                        <img src="/icons/icon-no.png" alt="" />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
        <button onClick={() => updateCompaion()}>Confirmar presença!</button>
      </ul>
        </CompanionsStyled>
    )
}