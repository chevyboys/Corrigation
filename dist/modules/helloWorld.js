import { DominionModule } from "project-dominion";
import { HelloWorldContextMenu } from "./helloWorld/contextMenu.js";
import { HelloWorldEventComponent } from "./helloWorld/event.js";
import { HelloWorldMessageButtonSender, HelloWorldMessageComponentInteraction } from "./helloWorld/messageComponentInteraction.js";
import { HelloWorldScheduleComponent } from "./helloWorld/scheduledJobs.js";
import { HelloWorldSlashCommand, HelloWorldSecondSlashCommand } from "./helloWorld/slashCommand.js";
import { HelloWorldEchoCommand, HelloWorldTextCommand } from "./helloWorld/textCommand.js";
import { HelloWorldUnregisterSlashCommand, loaded, Reload, unloaded } from "./helloWorld/loadUnload.js";
export const Module = new DominionModule({
    name: "hello world",
    components: [
        HelloWorldSlashCommand,
        HelloWorldTextCommand,
        HelloWorldEventComponent,
        HelloWorldContextMenu,
        HelloWorldMessageButtonSender,
        HelloWorldMessageComponentInteraction,
        HelloWorldScheduleComponent,
        HelloWorldUnregisterSlashCommand,
        HelloWorldEchoCommand,
        loaded,
        unloaded,
        Reload,
        HelloWorldSecondSlashCommand
    ]
});
