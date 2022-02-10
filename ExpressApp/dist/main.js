"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.appContainer = exports.app = exports.appBindings = void 0;
const inversify_1 = require("inversify");
const app_1 = require("./app");
const config_service_1 = require("./config/config.service");
const exception_flter_1 = require("./errors/exception.flter");
const logger_service_1 = require("./logger/logger.service");
const types_1 = require("./types");
const user_service_1 = require("./users/user.service");
const users_controller_1 = require("./users/users.controller");
exports.appBindings = new inversify_1.ContainerModule((bind) => {
    bind(types_1.TYPES.Application).to(app_1.App);
    bind(types_1.TYPES.ILogger).to(logger_service_1.LoggerService).inSingletonScope;
    bind(types_1.TYPES.IExceptionFilter).to(exception_flter_1.ExceptionFilter);
    bind(types_1.TYPES.IUserController).to(users_controller_1.UserController);
    bind(types_1.TYPES.IUserService).to(user_service_1.UserService);
    bind(types_1.TYPES.IConfigService).to(config_service_1.ConfigService).inSingletonScope;
});
function bootstrap() {
    const appContainer = new inversify_1.Container();
    appContainer.load(exports.appBindings);
    const app = appContainer.get(types_1.TYPES.Application);
    app.init();
    return { app, appContainer };
}
_a = bootstrap(), exports.app = _a.app, exports.appContainer = _a.appContainer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSx5Q0FBbUU7QUFDbkUsK0JBQTRCO0FBRTVCLDREQUF3RDtBQUN4RCw4REFBMkQ7QUFHM0QsNERBQXdEO0FBQ3hELG1DQUFnQztBQUNoQyx1REFBbUQ7QUFFbkQsK0RBQTBEO0FBRzdDLFFBQUEsV0FBVyxHQUFHLElBQUksMkJBQWUsQ0FBQyxDQUFDLElBQXFCLEVBQUUsRUFBRTtJQUN4RSxJQUFJLENBQU0sYUFBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxTQUFHLENBQUMsQ0FBQztJQUNyQyxJQUFJLENBQVUsYUFBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyw4QkFBYSxDQUFDLENBQUMsZ0JBQWdCLENBQUM7SUFDaEUsSUFBSSxDQUFtQixhQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxFQUFFLENBQUMsaUNBQWUsQ0FBQyxDQUFDO0lBQ25FLElBQUksQ0FBa0IsYUFBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxpQ0FBYyxDQUFDLENBQUM7SUFDaEUsSUFBSSxDQUFlLGFBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLENBQUMsMEJBQVcsQ0FBQyxDQUFDO0lBQ3ZELElBQUksQ0FBaUIsYUFBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyw4QkFBYSxDQUFDLENBQUMsZ0JBQWdCLENBQUM7QUFDL0UsQ0FBQyxDQUFDLENBQUM7QUFFSCxTQUFTLFNBQVM7SUFDakIsTUFBTSxZQUFZLEdBQUcsSUFBSSxxQkFBUyxFQUFFLENBQUM7SUFDckMsWUFBWSxDQUFDLElBQUksQ0FBQyxtQkFBVyxDQUFDLENBQUM7SUFDL0IsTUFBTSxHQUFHLEdBQUcsWUFBWSxDQUFDLEdBQUcsQ0FBTSxhQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDckQsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ1gsT0FBTyxFQUFFLEdBQUcsRUFBRSxZQUFZLEVBQUUsQ0FBQztBQUM5QixDQUFDO0FBRVksS0FBd0IsU0FBUyxFQUFFLEVBQWpDLFdBQUcsV0FBRSxvQkFBWSxtQkFBaUIifQ==