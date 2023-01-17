import { SlashCommandComponent } from "chiron";
import { SlashCommandBuilder } from "discord.js";
export let HelloWorldSlashCommand = new SlashCommandComponent({
    builder: new SlashCommandBuilder().setName('ping').setDescription('Replies with Pong!'),
    enabled: true,
    category: "main",
    permissions: (interaction) => { return true; },
    process: (interaction) => {
        interaction.isRepliable() ? interaction.reply("Pong!") : console.error("could not reply");
    }
});
