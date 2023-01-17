import { EventComponent } from "chiron";
import { Events, MessageReaction, User } from "discord.js";

export let HelloWorldEventComponent = new EventComponent({
    trigger: Events.MessageReactionAdd,
    enabled: true,
    process: async (MessageReaction: MessageReaction, user: User) => {
        await MessageReaction.react();
    }
})