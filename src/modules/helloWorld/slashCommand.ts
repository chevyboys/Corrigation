import { SlashCommandComponent } from "project-dominion";
import { CommandInteraction, SlashCommandBuilder } from "discord.js";

export let HelloWorldSlashCommand = new SlashCommandComponent({
    builder: new SlashCommandBuilder().setName('ping').setDescription('Replies with Pong!'),
    enabled: true,
    category: "main",
    permissions: (interaction) => { return true },
    process: (interaction) => {
        (interaction as CommandInteraction).isRepliable() ? (interaction as CommandInteraction).reply("Pong!") : console.error("could not reply");
    }
})
export let HelloWorldSecondSlashCommand = new SlashCommandComponent({
    builder: new SlashCommandBuilder().setName('silent-ping').setDescription('Replies with Pong!'),
    enabled: true,
    category: "main",
    permissions: (interaction) => { return true },
    process: (interaction) => {
        (interaction as CommandInteraction).isRepliable() ? (interaction as CommandInteraction).reply({ content: "Pong!", ephemeral: true }) : console.error("could not reply");
    }
})