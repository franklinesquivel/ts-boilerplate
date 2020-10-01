import { config as dotEnvConfig } from "dotenv";

/**
 * Setting the custom enviroment vars for the app. This has to be the first thing that the app executes
 * to load the defined vars into de `process` entity.
 */
dotEnvConfig();

import server from "./server";
import { __disc_token__, __port__ } from "./constans";
import bot from "./bot";

// Starting Express server on a port defined by enviroment var
server.listen(__port__, () => 
	console.log(`Server stated! Listening at http://localhost:${__port__}`)
);

bot.login(__disc_token__ ?? undefined).catch(err => console.log(err)).then(() => console.log('Bot up!'));