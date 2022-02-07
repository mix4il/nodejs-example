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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSx5Q0FBbUU7QUFDbkUsK0JBQTRCO0FBQzVCLDhEQUEyRDtBQUczRCw0REFBd0Q7QUFDeEQsbUNBQWdDO0FBQ2hDLCtEQUEwRDtBQUc3QyxRQUFBLFdBQVcsR0FBRyxJQUFJLDJCQUFlLENBQUMsQ0FBQyxJQUFxQixFQUFFLEVBQUU7SUFDeEUsSUFBSSxDQUFNLGFBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLENBQUMsU0FBRyxDQUFDLENBQUM7SUFDckMsSUFBSSxDQUFVLGFBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsOEJBQWEsQ0FBQyxDQUFDO0lBQy9DLElBQUksQ0FBbUIsYUFBSyxDQUFDLGdCQUFnQixDQUFDLENBQUMsRUFBRSxDQUFDLGlDQUFlLENBQUMsQ0FBQztJQUNuRSxJQUFJLENBQWtCLGFBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQyxFQUFFLENBQUMsaUNBQWMsQ0FBQyxDQUFDO0FBQ2pFLENBQUMsQ0FBQyxDQUFDO0FBRUgsU0FBUyxTQUFTO0lBQ2pCLE1BQU0sWUFBWSxHQUFHLElBQUkscUJBQVMsRUFBRSxDQUFDO0lBQ3JDLFlBQVksQ0FBQyxJQUFJLENBQUMsbUJBQVcsQ0FBQyxDQUFDO0lBQy9CLE1BQU0sR0FBRyxHQUFHLFlBQVksQ0FBQyxHQUFHLENBQU0sYUFBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3JELEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNYLE9BQU8sRUFBRSxHQUFHLEVBQUUsWUFBWSxFQUFFLENBQUM7QUFDOUIsQ0FBQztBQUVZLEtBQXdCLFNBQVMsRUFBRSxFQUFqQyxXQUFHLFdBQUUsb0JBQVksbUJBQWlCIn0=