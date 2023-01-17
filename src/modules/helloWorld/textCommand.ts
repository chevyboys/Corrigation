import { MessageCommandComponent } from "chiron";
import { Message } from "discord.js";

export let HelloWorldTextCommand = new MessageCommandComponent({
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