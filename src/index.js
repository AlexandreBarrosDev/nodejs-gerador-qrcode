import prompt from "prompt";
import chalk from "chalk";

import { mainPrompt } from "./prompts/prompt-main.js";
import { createQrCode } from "./services/qrcode/create-qrcode.js";
import { createPassword } from "./services/password/create-pass.js";

async function main() {
  const log = console.log;
  prompt.get(mainPrompt, async (err, choose) => {
    if (choose.select == 1) await createQrCode();
    if (choose.select == 2) await createPassword();
  });

  prompt.start();
}

main();
