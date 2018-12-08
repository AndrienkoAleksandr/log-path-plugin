
/**
 * Generated using theia-plugin-generator
 */

import * as theia from '@theia/plugin';

export function start(context: theia.PluginContext) {
    const informationMessageTestCommand = {
        id: 'hello-world-example-generated',
        label: "Hello World"
    };

    context.subscriptions.push(theia.commands.registerCommand(informationMessageTestCommand, (...args: any[]) => {
        theia.window.showInformationMessage('Hello World!');

        //const logChannel = theia.window.createOutputChannel("My logs");
        //logChannel.appendLine("Hello from plugin!");

        console.log("Some *************************.")
        console.log(context.logPath);
        console.log(context.extensionPath);
    }));

}

export function stop() {

}
