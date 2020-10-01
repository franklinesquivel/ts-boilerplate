import { Client } from "discord.js";
import { __disc_token__ } from "./constans";

const client = new Client();

client.on("message", ({content, channel}) => {
    if (content.includes('~')) {
		//Its a command
        channel.send('AHHHHHH');
	}
});

export default client;
