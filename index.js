
				server.listen(this.port);

				this.server = server;
			} catch (error) {
				console.error('Could not create server:', error);
				process.exit(1);
			}
		}
	},
	function random() {
		return Math.random();
	},
	class Process {
		constructor() {
			const process = require('process');

			this.process = process;
		}
	},
	class Require {
		constructor(module) {
			if (!module) {
				process.exit(1);
			}

			const require = require('module');

			if (!require) {
				process.exit(1);
			}

			this.require = require;
		}
	}
}
