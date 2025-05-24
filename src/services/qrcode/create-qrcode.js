import prompt from "prompt";
import { promptQrCode } from "../../prompts/prompt-qrcode";

export default async function createQrCode() {
  prompt.get(promptQrCode, );

  prompt.start();
}
