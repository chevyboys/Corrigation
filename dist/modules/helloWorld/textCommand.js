import { MessageCommandComponent } from "project-dominion";
import { Events } from "discord.js";
export let HelloWorldTextCommand = new MessageCommandComponent({
    name: "hello",
    description: "replies with 'world'",
    category: "main",
    enabled: true,
    trigger: Events.MessageCreate, //ToDo: Figure out why this is not properly being done in the constructor
    permissions: (msg) => true,
    process: (msg, suffix) => {
        msg.reply("world! " + suffix);
        return "";
    }
});
export let HelloWorldEchoCommand = new MessageCommandComponent({
    name: "echo",
    description: "replies with 'world'",
    category: "main",
    enabled: true,
    permissions: (msg) => true,
    trigger: Events.MessageCreate, //ToDo: Figure out why this is not properly being done in the constructor
    process: (msg, suffix) => {
        msg.reply(suffix);
        return "";
    }
});
