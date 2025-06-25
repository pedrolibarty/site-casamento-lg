import React, { useEffect, useState } from "react";
import { payload } from "pix-payload";
import QRCode from "qrcode";

export default function PixCopiaCola() {
  const [pixText, setPixText] = useState("");
  const [qrCodeUrl, setQrCodeUrl] = useState("");

  useEffect(() => {
    async function gerarPix() {
      try {
        // Gerar o payload Pix (texto do Pix Copia e Cola)
        const pixPayload = payload({
          key: "casamentopd18@gmail.com", // sua chave Pix
          description: "Presente Casamento",
          name: "PEDRO PRATES",
          city: "GOVERNADORVALADARES",
          txid: "*",  // ou um identificador único, ex: "PRESENTE-001"
          amount: "10.00",
        });

        setPixText(pixPayload);

        // Gerar QR Code para o payload Pix
        const qrDataUrl = await QRCode.toDataURL(pixPayload);
        setQrCodeUrl(qrDataUrl);
      } catch (error) {
        console.error("Erro ao gerar Pix:", error);
      }
    }

    gerarPix();
  }, []);

  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h2>Escaneie o QR Code para pagar</h2>
      {qrCodeUrl && <img src={qrCodeUrl} alt="QR Code Pix" style={{marginBottom: 20}} />}
      
      <h3>Ou copie e cole este código Pix no seu app do banco:</h3>
      <textarea
        readOnly
        value={pixText}
        style={{ width: "90%", height: "6rem", fontSize: "1.1rem", padding: "1rem" }}
      />
    </div>
  );
}
