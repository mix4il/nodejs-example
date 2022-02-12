"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.appContainer = exports.app = exports.appBindings = void 0;
const inversify_1 = require("inversify");
const prismaService_service_1 = require("./database/prismaService.service");
const app_1 = require("./app");
const config_service_1 = require("./config/config.service");
const exception_flter_1 = require("./errors/exception.flter");
const logger_service_1 = require("./logger/logger.service");
const types_1 = require("./types");
const users_service_1 = require("./users/users.service");
const users_controller_1 = require("./users/users.controller");
const users_repository_1 = require("./users/users.repository");
exports.appBindings = new inversify_1.ContainerModule((bind) => {
    bind(types_1.TYPES.Application).to(app_1.App);
    bind(types_1.TYPES.ILogger).to(logger_service_1.LoggerService).inSingletonScope;
    bind(types_1.TYPES.IExceptionFilter).to(exception_flter_1.ExceptionFilter);
    bind(types_1.TYPES.IUserController).to(users_controller_1.UserController);
    bind(types_1.TYPES.IUserService).to(users_service_1.UserService);
    bind(types_1.TYPES.IConfigService).to(config_service_1.ConfigService).inSingletonScope;
    bind(types_1.TYPES.IPrismaService).to(prismaService_service_1.PrismaService).inSingletonScope;
    bind(types_1.TYPES.IUsersRepository).to(users_repository_1.UsersRepository);
});
function bootstrap() {
    const appContainer = new inversify_1.Container();
    appContainer.load(exports.appBindings);
    const app = appContainer.get(types_1.TYPES.Application);
    app.init();
    return { app, appContainer };
}
_a = bootstrap(), exports.app = _a.app, exports.appContainer = _a.appContainer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSx5Q0FBbUU7QUFFbkUsNEVBQWlFO0FBQ2pFLCtCQUE0QjtBQUU1Qiw0REFBd0Q7QUFDeEQsOERBQTJEO0FBRzNELDREQUF3RDtBQUN4RCxtQ0FBZ0M7QUFDaEMseURBQW9EO0FBRXBELCtEQUEwRDtBQUcxRCwrREFBMkQ7QUFFOUMsUUFBQSxXQUFXLEdBQUcsSUFBSSwyQkFBZSxDQUFDLENBQUMsSUFBcUIsRUFBRSxFQUFFO0lBQ3hFLElBQUksQ0FBTSxhQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxDQUFDLFNBQUcsQ0FBQyxDQUFDO0lBQ3JDLElBQUksQ0FBVSxhQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLDhCQUFhLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQztJQUNoRSxJQUFJLENBQW1CLGFBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxpQ0FBZSxDQUFDLENBQUM7SUFDbkUsSUFBSSxDQUFrQixhQUFLLENBQUMsZUFBZSxDQUFDLENBQUMsRUFBRSxDQUFDLGlDQUFjLENBQUMsQ0FBQztJQUNoRSxJQUFJLENBQWUsYUFBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsQ0FBQywyQkFBVyxDQUFDLENBQUM7SUFDdkQsSUFBSSxDQUFpQixhQUFLLENBQUMsY0FBYyxDQUFDLENBQUMsRUFBRSxDQUFDLDhCQUFhLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQztJQUM5RSxJQUFJLENBQWlCLGFBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQyxFQUFFLENBQUMscUNBQWEsQ0FBQyxDQUFDLGdCQUFnQixDQUFDO0lBQzlFLElBQUksQ0FBbUIsYUFBSyxDQUFDLGdCQUFnQixDQUFDLENBQUMsRUFBRSxDQUFDLGtDQUFlLENBQUMsQ0FBQztBQUNwRSxDQUFDLENBQUMsQ0FBQztBQUVILFNBQVMsU0FBUztJQUNqQixNQUFNLFlBQVksR0FBRyxJQUFJLHFCQUFTLEVBQUUsQ0FBQztJQUNyQyxZQUFZLENBQUMsSUFBSSxDQUFDLG1CQUFXLENBQUMsQ0FBQztJQUMvQixNQUFNLEdBQUcsR0FBRyxZQUFZLENBQUMsR0FBRyxDQUFNLGFBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNyRCxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDWCxPQUFPLEVBQUUsR0FBRyxFQUFFLFlBQVksRUFBRSxDQUFDO0FBQzlCLENBQUM7QUFFWSxLQUF3QixTQUFTLEVBQUUsRUFBakMsV0FBRyxXQUFFLG9CQUFZLG1CQUFpQiJ9