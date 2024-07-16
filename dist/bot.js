import * as pkg from "project-dominion";
const { DominionConfig, DominionClient } = pkg;
import { Partials, GatewayIntentBits } from "discord.js";
import { configOptions } from "./config/config.js";
const config = new DominionConfig(configOptions);
const client = new DominionClient({
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
});
await client.login(config.token);
client.modules.register();
