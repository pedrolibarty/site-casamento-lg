import { DescriptionStyled } from "./style";

const Description = () => {
  return (
    <DescriptionStyled>
      <h2>Noivos</h2>
      <div className="images-noivos">
        
        <img src="\images\circle-casal-2.png" alt="" className="circle-casal" />
        
      </div>
      <h3>Lavínia & Gean</h3>
      <p>
        O amor nos uniu de um jeito único e especial. Desde o primeiro olhar,
        soubemos que era o começo de algo lindo. Entre risadas, desafios e
        sonhos compartilhados, construímos um caminho de amor e cumplicidade.
      </p>
      <p>
        Nosso casamento é a celebração desse sentimento que cresce a cada dia. É
        a promessa de seguirmos juntos, de mãos dadas, prontos para tudo que a
        vida nos reserva.
      </p>
      <p>
        E nada seria tão especial sem vocês aqui, celebrando esse momento
        conosco!
      </p>
      <p>
        “O amor é a única riqueza que se multiplica quando é dividida.” -
        São João Paulo II
      </p>
      <p>Com carinho,</p>
      <span>Lavínia & Gean</span>
    </DescriptionStyled>
  );
};

export default Description;
