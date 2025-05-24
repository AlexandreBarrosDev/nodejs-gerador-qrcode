import qr from "qrcode-terminal";
import chalk from "chalk";

async function handleQrCode(err, result) {
  if(err) {
    console.log("Error on application");
    return;
  }

  const isSmall = result.type == 2;
  qr.generate(result.link, {small: isSmall}, 
}