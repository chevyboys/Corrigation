import { ChironModule } from "chiron";
import { HelloWorldContextMenu } from "./helloWorld/contextMenu";
import { HelloWorldEventComponent } from "./helloWorld/event";
import { HelloWorldMessageButtonSender, HelloWorldMessageComponentInteraction } from "./helloWorld/messageComponentInteraction";
import { HelloWorldSlashCommand } from "./helloWorld/slashCommand";
import { HelloWorldTextCommand } from "./helloWorld/textCommand";

export const Module = new ChironModule({
    name: "hello world",
    components: [
        HelloWorldSlashCommand,
        HelloWorldTextCommand,
        HelloWorldEventComponent,
        HelloWorldContextMenu,
        HelloWorldMessageButtonSender,
        HelloWorldMessageComponentInteraction
    ]

})