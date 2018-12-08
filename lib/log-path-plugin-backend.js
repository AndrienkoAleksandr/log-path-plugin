"use strict";
/**
 * Generated using theia-plugin-generator
 */
Object.defineProperty(exports, "__esModule", { value: true });
var theia = require("@theia/plugin");
function start(context) {
    var informationMessageTestCommand = {
        id: 'hello-world-example-generated',
        label: "Hello World"
    };
    context.subscriptions.push(theia.commands.registerCommand(informationMessageTestCommand, function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        theia.window.showInformationMessage('Hello World!');
        //const logChannel = theia.window.createOutputChannel("My logs");
        //logChannel.appendLine("Hello from plugin!");
        console.log("Some *************************.");
        console.log(context.logPath);
        console.log(context.extensionPath);
    }));
}
exports.start = start;
function stop() {
}
exports.stop = stop;
//# sourceMappingURL=log-path-plugin-backend.js.map