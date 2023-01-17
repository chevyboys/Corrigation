import { MessageCommandComponent } from "chiron";
export let HelloWorldTextCommand = new MessageCommandComponent({
    name: "hello",
    description: "replies with 'world'",
    category: "main",
    enabled: true,
    permissions: (msg) => true,
    process: (msg, suffix) => {
        msg.reply("world! " + suffix);
        return "";
    }
});
