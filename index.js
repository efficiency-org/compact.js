module.exports = {
	class Server {
		constructor(function, port) {
			try {
				this.function = function;
				this.port = port;

				const http = require('http');
				const server = http.createServer(this.function);

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
	}
}
