import { DominionClient, ModuleOnLoadComponent, ModuleOnUnloadComponent, SlashCommandComponent } from "project-dominion";
import { CommandInteraction, SlashCommandBuilder } from "discord.js";
export let HelloWorldUnregisterSlashCommand = new SlashCommandComponent({
    builder: new SlashCommandBuilder().setName('unregister').setDescription('jetisons this module'),
    enabled: true,
    category: "main",
    permissions: (interaction) => { return true; },
    process: async (interaction) => {
        if (HelloWorldUnregisterSlashCommand.module?.client instanceof DominionClient)
            await HelloWorldUnregisterSlashCommand.module?.client?.modules.unregister(HelloWorldUnregisterSlashCommand.module);
        (interaction as CommandInteraction).isRepliable() ? await (interaction as CommandInteraction).reply("Jettison the module!") : console.error("could not reply");
        console.log("Jettisoned");
    }
});
export let Reload = new SlashCommandComponent({
    builder: new SlashCommandBuilder().setName('reload').setDescription('reloads all modules'),
    enabled: true,
    category: "main",
    permissions: (interaction) => { return true; },
    process: async (interaction) => {
        if ((interaction as CommandInteraction).isRepliable()) (interaction as CommandInteraction).deferReply()
        if (Reload.module?.client instanceof DominionClient)
            await Reload.module?.client?.modules.reload();
        (interaction as CommandInteraction).isRepliable() ? await (interaction as CommandInteraction).editReply("Reloaded the modules!") : console.error("could not reply");
        console.log("Reloaded all modules");
    }

})
export let loaded = new ModuleOnLoadComponent({
    enabled: true,
    process: (inputString) => {
        console.log(inputString || "initialized");
    }
})

export let unloaded = new ModuleOnUnloadComponent({
    enabled: true,
    process: () => {
        console.log("unloading");
        return "Reloaded";
    }
})

