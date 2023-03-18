export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".nojekyll"]),
	mimeTypes: {},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.8dcdc080.js","imports":["_app/immutable/entry/start.8dcdc080.js","_app/immutable/chunks/index.b050e071.js","_app/immutable/chunks/singletons.280ac295.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.6acbbd5c.js","imports":["_app/immutable/entry/app.6acbbd5c.js","_app/immutable/chunks/index.b050e071.js"],"stylesheets":[],"fonts":[]}},
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
