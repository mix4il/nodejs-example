"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.appContainer = exports.app = exports.appBindings = void 0;
const inversify_1 = require("inversify");
const app_1 = require("./app");
const exception_flter_1 = require("./errors/exception.flter");
const logger_service_1 = require("./logger/logger.service");
const types_1 = require("./types");
const users_controller_1 = require("./users/users.controller");
exports.appBindings = new inversify_1.ContainerModule((bind) => {
    bind(types_1.TYPES.Application).to(app_1.App);
    bind(types_1.TYPES.ILogger).to(logger_service_1.LoggerService);
    bind(types_1.TYPES.IExceptionFilter).to(exception_flter_1.ExceptionFilter);
    bind(types_1.TYPES.IUserController).to(users_controller_1.UserController);
});
function bootstrap() {
    const appContainer = new inversify_1.Container();
    appContainer.load(exports.appBindings);
    const app = appContainer.get(types_1.TYPES.Application);
    app.init();
    return { app, appContainer };
}
_a = bootstrap(), exports.app = _a.app, exports.appContainer = _a.appContainer;
