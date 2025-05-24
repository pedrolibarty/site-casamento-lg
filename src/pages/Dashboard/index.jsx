import { useEffect, useState } from "react";
import { DashboardStyled } from "./style";

const Dashboard = () => {
  const [timeLeft, setTimeLeft] = useState({
    dias: 0,
    horas: 0,
    minutos: 0,
    segundos: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2025-11-21T00:00:00").getTime(); // 21 de nov de 2025 à meia-noite

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        setTimeLeft({
          dias: 0,
          horas: 0,
          minutos: 0,
          segundos: 0,
        });
        return;
      }

      const dias = Math.floor(distance / (1000 * 60 * 60 * 24));
      const horas = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutos = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const segundos = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ dias, horas, minutos, segundos });
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <DashboardStyled>
      <div className="casal-box">
        <img src="\images\casal-2.png" alt="" className="casal-image" />
      </div>
      <div className="content">
        <div className="container-image">
          <img src="\images\logo.png" alt="" className="logo-image" />
          <img src="\images\flores.png" alt="" className="flowers" />
        </div>
        <div className="infos">
        <h1>Lavinia & Gean</h1>
        <h2>Save the date</h2>
        <h3>21 de novembro de 2025</h3>
        <div className="container">
          <div className="clock">
            <div className="box">
              <p>{timeLeft.dias}</p>
              <span>Dias</span>
            </div>
            <div className="box">
              <p>{timeLeft.horas}</p>
              <span>Horas</span>
            </div>
            <div className="box">
              <p>{timeLeft.minutos}</p>
              <span>Minutos</span>
            </div>
            <div className="box">
              <p>{timeLeft.segundos}</p>
              <span>Segundos</span>
            </div>
          </div>
          </div>
        </div>
      </div>
    </DashboardStyled>
  );
};

export default Dashboard;
