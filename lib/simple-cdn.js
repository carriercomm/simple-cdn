var IsAlive = require('is-alive'),
    servers = new IsAlive();

function SimpleCDN() {
    "use strict";

    this._servers = [];

    servers.on("down", this._hostDown.bind(this));
    servers.on("alive", this._hostUp.bind(this));
}

SimpleCDN.prototype._hostDown = function (server) {
    "use strict";

    if (this._servers.indexOf(server) !== -1) {
        this._servers.splice(this._servers.indexOf(server), 1);
    }
};

SimpleCDN.prototype._hostUp = function (server) {
    "use strict";

    if (this._servers.indexOf(server) === -1) {
        this._servers.push(server);
    }
};

SimpleCDN.prototype.addServer = function (server, statusCode) {
    "use strict";

    var self = this;

    statusCode = statusCode || 200;

    servers.add(server, statusCode, function (err) {
        if (err) {
            throw err;
        }
    });
};

SimpleCDN.prototype.getFullURL = function (path) {
    "use strict";

    var rand = Math.floor(Math.random() * this._servers.length);
    console.log(rand, this._servers);

    return this._servers[rand] + "/" + path;
};