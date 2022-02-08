"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.appContainer = exports.app = exports.appBindings = void 0;
const inversify_1 = require("inversify");
const app_1 = require("./app");
const exception_flter_1 = require("./errors/exception.flter");
const logger_service_1 = require("./logger/logger.service");
const types_1 = require("./types");
const user_service_1 = require("./users/user.service");
const users_controller_1 = require("./users/users.controller");
exports.appBindings = new inversify_1.ContainerModule((bind) => {
    bind(types_1.TYPES.Application).to(app_1.App);
    bind(types_1.TYPES.ILogger).to(logger_service_1.LoggerService);
    bind(types_1.TYPES.IExceptionFilter).to(exception_flter_1.ExceptionFilter);
    bind(types_1.TYPES.IUserController).to(users_controller_1.UserController);
    bind(types_1.TYPES.IUserService).to(user_service_1.UserService);
});
function bootstrap() {
    const appContainer = new inversify_1.Container();
    appContainer.load(exports.appBindings);
    const app = appContainer.get(types_1.TYPES.Application);
    app.init();
    return { app, appContainer };
}
_a = bootstrap(), exports.app = _a.app, exports.appContainer = _a.appContainer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSx5Q0FBbUU7QUFDbkUsK0JBQTRCO0FBQzVCLDhEQUEyRDtBQUczRCw0REFBd0Q7QUFDeEQsbUNBQWdDO0FBQ2hDLHVEQUFtRDtBQUVuRCwrREFBMEQ7QUFHN0MsUUFBQSxXQUFXLEdBQUcsSUFBSSwyQkFBZSxDQUFDLENBQUMsSUFBcUIsRUFBRSxFQUFFO0lBQ3hFLElBQUksQ0FBTSxhQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxDQUFDLFNBQUcsQ0FBQyxDQUFDO0lBQ3JDLElBQUksQ0FBVSxhQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLDhCQUFhLENBQUMsQ0FBQztJQUMvQyxJQUFJLENBQW1CLGFBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxpQ0FBZSxDQUFDLENBQUM7SUFDbkUsSUFBSSxDQUFrQixhQUFLLENBQUMsZUFBZSxDQUFDLENBQUMsRUFBRSxDQUFDLGlDQUFjLENBQUMsQ0FBQztJQUNoRSxJQUFJLENBQWUsYUFBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsQ0FBQywwQkFBVyxDQUFDLENBQUM7QUFDeEQsQ0FBQyxDQUFDLENBQUM7QUFFSCxTQUFTLFNBQVM7SUFDakIsTUFBTSxZQUFZLEdBQUcsSUFBSSxxQkFBUyxFQUFFLENBQUM7SUFDckMsWUFBWSxDQUFDLElBQUksQ0FBQyxtQkFBVyxDQUFDLENBQUM7SUFDL0IsTUFBTSxHQUFHLEdBQUcsWUFBWSxDQUFDLEdBQUcsQ0FBTSxhQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDckQsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ1gsT0FBTyxFQUFFLEdBQUcsRUFBRSxZQUFZLEVBQUUsQ0FBQztBQUM5QixDQUFDO0FBRVksS0FBd0IsU0FBUyxFQUFFLEVBQWpDLFdBQUcsV0FBRSxvQkFBWSxtQkFBaUIifQ==