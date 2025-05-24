import { ListStyled } from "./style";

const List = () => {
  return (
    <ListStyled>
      <div className="page-top">
        <img src="/images/ramo-list-l.png" alt="" className="ramo-list-l" />
        <h2>Lista de Presentes</h2>
        <img src="/images/ramo-list-r.png" alt="" className="ramo-list-r" />
      </div>
      <ul>
        <li>
          <div className="card-img">
            <img src="/gifts/gift-1.png" alt="" />
          </div>
          <p>Geladeira Brastemp 447 Litros Frost Free Inverse</p>
          <span>RS 5.029,00</span>
          <button>Presentear</button>
        </li>
        <li>
          <div className="card-img">
            <img src="/gifts/gift-1.png" alt="" />
          </div>
          <p>Geladeira Brastemp 447 Litros Frost Free Inverse</p>
          <span>RS 5.029,00</span>
          <button>Presentear</button>
        </li>
        <li>
          <div className="card-img">
            <img src="/gifts/gift-1.png" alt="" />
          </div>
          <p>Geladeira Brastemp 447 Litros Frost Free Inverse</p>
          <span>RS 5.029,00</span>
          <button>Presentear</button>
        </li>
        <li>
          <div className="card-img">
            <img src="/gifts/gift-1.png" alt="" />
          </div>
          <p>Geladeira Brastemp 447 Litros Frost Free Inverse</p>
          <span>RS 5.029,00</span>
          <button>Presentear</button>
        </li>
        <li>
          <div className="card-img">
            <img src="/gifts/gift-1.png" alt="" />
          </div>
          <p>Geladeira Brastemp 447 Litros Frost Free Inverse</p>
          <span>RS 5.029,00</span>
          <button>Presentear</button>
        </li>
        <li>
          <div className="card-img">
            <img src="/gifts/gift-1.png" alt="" />
          </div>
          <p>Geladeira Brastemp 447 Litros Frost Free Inverse</p>
          <span>RS 5.029,00</span>
          <button>Presentear</button>
        </li>
      </ul>
    </ListStyled>
  );
};

export default List;
