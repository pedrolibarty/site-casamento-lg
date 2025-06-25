import pkg from "qrcode-pix";
const { QrCodePix } = pkg;

const data = {
  key: "teste@pix.com",
  name: "GEAN",
  city: "GOVERNADORVALADARES",
  value: 1,
  txid: "TESTE001" // txid é obrigatório e deve ter até 25 caracteres alfanuméricos
};

console.log(data);

const pix = QrCodePix(data);

console.log(pix.payload());
