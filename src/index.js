import prompt from "prompt";

import { mainPrompt } from "./prompts/prompt-main.js";
import chalk from "chalk";

async function main() {
  const log = console.log;
  prompt.get(mainPrompt, async (err, choose) => {
    if (choose.select == 1) log(chalk.blue.bold("Escolheu QR Code"));
    if (choose.select == 2) log(chalk.blue.bold("Escolheu Password"));
  });

  prompt.start();
}

main();
