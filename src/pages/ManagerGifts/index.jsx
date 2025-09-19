import { useContext, useState } from "react"
import { AdminContext } from "./AdminContext"

const ManagerGifts = () => {
  const { gifts, payGifts } = useContext(AdminContext)

  const [openGifts, setOpenGifts] = useState({})
  const [search, setSearch] = useState("")
  const [filterStatus, setFilterStatus] = useState("all")

  const toggleGift = (id) => {
    setOpenGifts((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  const totalExpected = gifts.reduce((acc, i) => acc + i.value, 0)
  const totalReceived = gifts.reduce((acc, i) => acc + i.payvalue, 0)

  const filteredGifts = gifts.filter((g) => {
    const matchesSearch = g.name.toLowerCase().includes(search.toLowerCase())
    const isCompleted = g.payvalue >= g.value
    if (filterStatus === "completed" && !isCompleted) return false
    if (filterStatus === "pending" && isCompleted) return false
    return matchesSearch
  })

  return (
    <>
      <ul className="result">
        <li>
          <h3>Previsto</h3>
          <div className="row-value">{totalExpected}</div>
        </li>
        <li>
          <h3>Recebido</h3>
          <div className="row-value">{totalReceived}</div>
        </li>
        <li>
          <h3>Percentual</h3>
          <div className="row-value">{((totalReceived / totalExpected) * 100).toFixed(2)}%</div>
        </li>
      </ul>

      <div style={{ margin: "1rem 0" }}>
        <input
          type="text"
          placeholder="Buscar por nome"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div style={{ marginBottom: "1rem" }}>
        <button onClick={() => setFilterStatus("all")}>Todos</button>
        <button onClick={() => setFilterStatus("completed")}>Completos</button>
        <button onClick={() => setFilterStatus("pending")}>Pendentes</button>
      </div>

      <h3>Presentes</h3>

      <ul className="list-gifts">
        {filteredGifts.map((g) => {
          const isOpen = openGifts[g.id] || false
          return (
            <li
              className="line-gift"
              key={g.id}
              onClick={() => toggleGift(g.id)}
              style={{ cursor: "pointer" }}
            >
              <p>{g.name}</p>
              <div className="divisor"></div>
              <div className="box-infos">
                <p>Esperado: {g.value}</p>
                <p>Recebido: {g.payvalue}</p>
                <p>{((g.payvalue / g.value) * 100).toFixed(2)}%</p>
              </div>

              {isOpen && (
                <ul className="list-pay">
                  {payGifts
                    .filter((p) => p.id === g.id)
                    .map((p) => (
                      <li className="line-pay" key={p.idPagamento}>
                        {p.namePix} - {p.value}
                      </li>
                    ))}
                </ul>
              )}
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default ManagerGifts
