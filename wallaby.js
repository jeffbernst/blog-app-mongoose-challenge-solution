module.exports = function (wallaby) {
	return {
		files: [
			'server.js',
			'models.js',
			'config.js'
		],

		tests: [
			'test/**/test-*-integration.js'
		],

		testFramework: 'mocha',

		env: {
			type: 'node',
			runner: 'node'
		},

		workers: {
			initial: 1,
			regular: 1,
			restart: true
		}
	};
};