import { EventComponent } from "project-dominion";
import { Events } from "discord.js";
export let HelloWorldEventComponent = new EventComponent({
    trigger: Events.MessageReactionAdd,
    enabled: true,
    process: async (args) => {
        let [arg, argnull, argnull2] = args;
        let reaction = arg;
        await reaction.react();
    }
});
