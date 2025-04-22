// Copyright (c) Dániel Tar, Alan Choi, Nic Barker, Piotr Błażejewicz and other contributors
// (Listed as owners in the DefinitelyTyped package metadata)
//
// This file is licensed under the MIT License.
// A copy of the license text can be found in the LICENSE-MIT file.
// All other files in the repository are licensed under the Apache 2.0 License
// which can be found in the LICENSE file.

declare namespace Mousetrap {
	interface ExtendedKeyboardEvent extends KeyboardEvent {
		returnValue: boolean; // IE returnValue
	}

	interface MousetrapOpts {
		useCapture: boolean;
	}

	interface MousetrapStatic {
		(el?: Element): MousetrapInstance;
		new (el?: Element, opts?: MousetrapOpts): MousetrapInstance;
		addKeycodes(keycodes: { [key: number]: string }): void;
		stopCallback: (
			e: ExtendedKeyboardEvent,
			element: Element,
			combo: string,
		) => boolean;
		bind(
			keys: string | string[],
			// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
			callback: (e: ExtendedKeyboardEvent, combo: string) => boolean | void,
			action?: string,
		): MousetrapInstance;
		unbind(keys: string | string[], action?: string): MousetrapInstance;
		trigger(keys: string, action?: string): MousetrapInstance;
		reset(): MousetrapInstance;
	}

	interface MousetrapInstance {
		stopCallback: (
			e: ExtendedKeyboardEvent,
			element: Element,
			combo: string,
		) => boolean;
		bind(
			keys: string | string[],
			callback: (e: ExtendedKeyboardEvent, combo: string) => void,
			action?: string,
		): this;
		unbind(keys: string | string[], action?: string): this;
		trigger(keys: string, action?: string): this;
		handleKey(
			character: string,
			modifiers: string[],
			e: ExtendedKeyboardEvent,
		): void;
		reset(): this;
	}
}

declare const Mousetrap: Mousetrap.MousetrapStatic;

export = Mousetrap;

export as namespace Mousetrap;
