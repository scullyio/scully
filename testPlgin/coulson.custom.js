"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const coulson_1 = require("@herodevs/coulson");
coulson_1.startCoulson({
    routes: {
        '/test': {
            type: coulson_1.RouteTypes.contentFolder,
            contentFolder: 'test',
        },
    },
});
//# sourceMappingURL=coulson.custom.js.map