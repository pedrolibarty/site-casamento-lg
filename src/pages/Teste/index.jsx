import { useContext, useEffect, useState } from "react";
import { AdminContext } from "../../contexts/AdminContext";

const Teste = () => {
  const { generatePayment } = useContext(AdminContext);

  return (
    <>
      <button onClick={() => generatePayment(150.30)}>aperta</button>
    </>
  );
};

export default Teste;
