import { config as dotEnvConfig } from "dotenv";

/**
 * Setting the custom enviroment vars for the app. This has to be the first thing that the app executes
 * to load the defined vars into de `process` entity.
 */
dotEnvConfig();

import server from "./server";
import { __port__ } from "./constans";

// Starting Express server on a port defined by enviroment var
server.listen(__port__, () =>
	console.log(`Server stated! Listening at http://localhost:${__port__}`)
);
