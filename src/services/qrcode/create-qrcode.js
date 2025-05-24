import prompt from "prompt";
import { promptQrCode } from "../../prompts/prompt-qrcode.js";
import { handleQrCode } from "./handle-qrcode.js";

export async function createQrCode() {
  prompt.get(promptQrCode, handleQrCode);

  prompt.start();
}
