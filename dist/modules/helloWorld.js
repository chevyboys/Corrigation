import { ChironModule, SlashCommandComponent } from "chiron/dist/Classes/Module/Module";
import { SlashCommandBuilder } from "discord.js";
export const Module = new ChironModule({
    name: "hello world",
    components: [
        new SlashCommandComponent({
            builder: new SlashCommandBuilder().setName('ping').setDescription('Replies with Pong!'),
            enabled: true,
            category: "main",
            permissions: (interaction) => { return true; },
            process: (interaction) => {
                interaction.isRepliable() ? interaction.reply("Pong!") : console.error("could not reply");
            }
        })
    ]
});
