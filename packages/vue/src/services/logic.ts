export function isElectron() {
	// Renderer process
	if (typeof window !== "undefined" && typeof window.process === "object")
		return true;

	// Main process
	if (typeof process !== "undefined" && typeof process.versions === "object" && !!process.versions.electron)
		return true;

	// Detect the user agent when the `nodeIntegration` option is set to true
	if (
		typeof navigator === "object"
    && typeof navigator.userAgent === "string"
    && navigator.userAgent.includes("Electron")
	)
		return true;

	return false;
}

export function nodeEmit(name: string, data?: any) {
	window.postMessage({ name, data });
}
