import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
export const component = async () => (await import('../entries/pages/_layout.svelte.js')).default;
export const file = '_app/immutable/entry/_layout.svelte.c230a303.js';
export { server };
export const server_id = "src/routes/+layout.server.ts";
export const imports = ["_app/immutable/entry/_layout.svelte.c230a303.js","_app/immutable/chunks/index.2e30228d.js"];
export const stylesheets = ["_app/immutable/assets/_layout.ed9cfe29.css"];
export const fonts = [];
