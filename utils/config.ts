import "dotenv/config";
import { Config } from "../interfaces/Config";

let config: Config;

try {
  config = require("../config.json");
} catch (error) {
  config = {
    TOKEN: process.env.TOKEN || "",
    BOT_NAME: process.env.BOT_NAME || "Rythm's Musical Bot",
    MAX_PLAYLIST_SIZE: parseInt(process.env.MAX_PLAYLIST_SIZE!) || 10,
    PRUNING: process.env.PRUNING === "true" ? true : false,
    STAY_TIME: parseInt(process.env.STAY_TIME!) || 30,
    DEFAULT_VOLUME: parseInt(process.env.DEFAULT_VOLUME!) || 100,
    LOCALE: process.env.LOCALE || "fr"
  };
}

config.BOT_NAME = config.BOT_NAME || "Rythm's Musical Bot";

if (!config.TOKEN) {
  throw new Error("Missing TOKEN environment variable. Add your Discord bot token in Render or in config.json.");
}

export { config };
