import { ChironConfig } from "chiron/dist/Classes/ChironConfig";
import { ChironClient } from "chiron/dist/Classes/ChironClient";
import { Partials, GatewayIntentBits } from "discord.js";
import { configOptions } from "./config/config";
const config = new ChironConfig(configOptions);
const client = new ChironClient({
    config: config,
    color: "#FFFFFF",
    modulePath: "dist/modules",
    partials: [Partials.User, Partials.Message, Partials.Reaction],
    intents: [
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.GuildMessageReactions,
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
    ],
    DEBUG: true,
    smiteArray: ["940148285300178954"]
});
await client.login(config.token);
client.modules.register();
