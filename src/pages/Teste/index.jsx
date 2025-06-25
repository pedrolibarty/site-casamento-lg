import { useEffect, useState } from "react";
import {QrCodePix} from "qrcode-pix";

const Teste = () => {
    const [qrCode, setQrCode] = useState('');
    const [rawPix, setRawPix] = useState('');

    useEffect(() => {
        async function generateDynamicPix() {
            const qrCodePix = QrCodePix({
                version: '01',
                key: '83740388-61e2-4618-aa20-50f19faab6d3',
                name: 'Gean Lacerda',
                city: 'Governador Valadares',
                transactionId: 'lg',
                message: 'prfv funciona',
                value: 1.00,
            })

            const rawPixStr = qrCodePix.payload()
            const qrCodeBase64 = await qrCodePix.base64()

            setRawPix(rawPixStr)
            setQrCode(qrCodeBase64)
        }

        void generateDynamicPix();
    }, [])

    return (
    <>
        <div style={{
            maxWidth: '400px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '0 auto',
        }}>
            <h1 style={{ fontSize: '24px', marginBottom: '5px' }}>
                Pague o que deve com PIX
            </h1>
            <small style={{ lineHeight: '1', marginBottom: '5px' }}>
                Sr. Caloteiro, para você pagar o que deve, basta escanear o QR Code abaixo ou copiar o código e
                enviar para o meu PIX.
            </small>
        </div>

        <div style={{ marginTop: 20 }}>
            <img src={qrCode} alt={'QR Code PIX'} />
            <p style={{
                maxWidth: '480px',
                margin: '0 auto',
                whiteSpace: 'nowrap',
                overflow: 'auto'
            }}>
                {rawPix}
            </p>
        </div>
    </>
);
}

export default Teste