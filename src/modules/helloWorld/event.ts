import { EventComponent, EventArgument_MessageReactionAdd, EventArgument1, EventArgument2, EventArgument3 } from "project-dominion";
import { Events, MessageReaction } from "discord.js";

export let HelloWorldEventComponent = new EventComponent({
    trigger: Events.MessageReactionAdd,
    enabled: true,
    process: async (args: [EventArgument1, EventArgument2, EventArgument3]) => {
        let [arg, argnull, argnull2] = args;
        let reaction = arg as MessageReaction; //toDo: discover why this isn't working
        await reaction.react();
    }
})