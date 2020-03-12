// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as config from './config';
import request from 'request';
import 'dotenv/config.js';

const TDApi = require('timedoctor');

async function getTokens() {
	if (this.access_token && this.refresh_token) {
		return {
			access_token: this.access_token,
			refresh_token: this.refresh_token
		};
	}
	return {
		access_token: config.ACCESS_TOKEN,
		refresh_token: config.REFRESH_TOKEN
	};
}

function setTokens() {
	console.log('set');
}


// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export async function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "vscode-timedoctor" is now active!');

	// Create and show panel
	const panel = vscode.window.createWebviewPanel(
		'catCoding',
		'Cat Coding',
		vscode.ViewColumn.One,
		{
			// Enable scripts in the webview
			enableScripts: true
		}
	);

	// And set its HTML content
	panel.webview.html = getWebviewContent();

	// const tdApi = new TDApi(getTokens, setTokens, 'AnyChart', config.TD_CK, config.TD_CS);
	// const result = await tdApi.Users.getUsers();

	// console.log(result);

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('extension.helloWorld', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World!');
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}

function getWebviewContent() {
	return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cat Coding</title>
</head>
<body>
    <img src="https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif" width="300" />
</body>
<script>
 console.log(window.location.origin);
</script>
</html>`;
}