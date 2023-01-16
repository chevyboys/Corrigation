import { ChironModule, EventComponent, MessageCommandComponent, SlashCommandComponent } from "chiron/dist/Classes/Module/Module";
import { Events, Message, SlashCommandBuilder } from "discord.js";

export const Module = new ChironModule({
    name: "hello world",
    components: [
        new SlashCommandComponent({
            builder: new SlashCommandBuilder().setName('ping').setDescription('Replies with Pong!'),
            enabled: true,
            category: "main",
            permissions: (interaction) => { return true },
            process: (interaction) => {
                interaction.isRepliable() ? interaction.reply("Pong!") : console.error("could not reply");
            }
        }),
        new MessageCommandComponent({
            name: "hello",
            description: "replies with 'world'",
            category: "main",
            enabled: true,
            permissions: (msg) => true,
            process: (msg: Message, suffix: string) => {
                msg.reply("world! " + suffix)
                return "";
            }
        })

    ]

})