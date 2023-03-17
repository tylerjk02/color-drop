export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".nojekyll"]),
	mimeTypes: {},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.d3afc381.js","imports":["_app/immutable/entry/start.d3afc381.js","_app/immutable/chunks/index.b050e071.js","_app/immutable/chunks/singletons.5f762757.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.b04fe1f4.js","imports":["_app/immutable/entry/app.b04fe1f4.js","_app/immutable/chunks/index.b050e071.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js')
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
