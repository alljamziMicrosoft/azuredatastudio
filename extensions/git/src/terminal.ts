/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the Source EULA. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { ExtensionContext, workspace } from 'vscode';
import { filterEvent, IDisposable } from './util';

export class TerminalEnvironmentManager {

	private readonly disposable: IDisposable;

	private _enabled = false;
	private set enabled(enabled: boolean) {
		if (this._enabled === enabled) {
			return;
		}

		this._enabled = enabled;
		this.context.environmentVariableCollection.clear();

		if (enabled) {
			for (const name of Object.keys(this.env)) {
				this.context.environmentVariableCollection.replace(name, this.env[name]);
			}
		}
	}

	constructor(private readonly context: ExtensionContext, private readonly env: { [key: string]: string }) {
		this.disposable = filterEvent(workspace.onDidChangeConfiguration, e => e.affectsConfiguration('git'))
			(this.refresh, this);

		this.refresh();
	}

	private refresh(): void {
		this.enabled = workspace.getConfiguration('git', null).get('terminalAuthentication', true);
	}

	dispose(): void {
		this.disposable.dispose();
	}
}
