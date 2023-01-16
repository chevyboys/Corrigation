import { ChironClient } from "Chiron/src/Classes/ChironClient";
import { config } from "./config/config";
import { Partials, GatewayIntentBits } from "discord.js"

const client = new ChironClient({
    config: config,
    color: "#FFFFFF",
    modulePath: "./modules",
    partials: [Partials.User, Partials.Message, Partials.Reaction],
    intents: [
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.GuildMessageReactions,
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
    ],
    DEBUG: false,
    smiteArray: ["940148285300178954"]


})

client.login();
client.modules.register();