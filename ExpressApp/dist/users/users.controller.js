"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const base_controller_1 = require("../common/base.controller");
const http_error_1 = require("../errors/http-error");
const inversify_1 = require("inversify");
const types_1 = require("../types");
const usersLogin_dto_1 = require("./usersLogin.dto");
const usersRegistration_dto_1 = require("./usersRegistration.dto");
require("reflect-metadata");
const validate_middleware_1 = require("../common/validate.middleware");
let UserController = class UserController extends base_controller_1.BaseController {
    constructor(loggerService, userService) {
        super(loggerService);
        this.loggerService = loggerService;
        this.userService = userService;
        this.bindRoutes([
            { path: '/login', method: 'post', func: this.login,
                middlewares: [new validate_middleware_1.ValidateMiddleware(usersLogin_dto_1.LoginDto)] },
            { path: '/admin', method: 'post', func: this.admin,
                middlewares: [new validate_middleware_1.ValidateMiddleware(usersRegistration_dto_1.RegistrationDto)] },
            { path: '/', method: 'get', func: this.users },
        ]);
    }
    login({ body }, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const validate = yield this.userService.validateUser(body);
            if (validate) {
                res.status(200).send(body);
            }
            next(new http_error_1.HTTPError(404, 'Ошибка авторизации'));
        });
    }
    admin({ body }, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.userService.createUser(body);
            if (result) {
                this.ok(res, { email: result.email, id: result.id });
                this.loggerService.log(result);
            }
            else {
                next(new http_error_1.HTTPError(404, 'Ошибка добавления'));
            }
        });
    }
    users(req, res) {
        this.ok(res, 'users');
    }
};
UserController = __decorate([
    (0, inversify_1.injectable)(),
    __param(0, (0, inversify_1.inject)(types_1.TYPES.ILogger)),
    __param(1, (0, inversify_1.inject)(types_1.TYPES.IUserService)),
    __metadata("design:paramtypes", [Object, Object])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMuY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91c2Vycy91c2Vycy5jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtEQUEyRDtBQUUzRCxxREFBaUQ7QUFDakQseUNBQStDO0FBQy9DLG9DQUFpQztBQUdqQyxxREFBNEM7QUFDNUMsbUVBQTBEO0FBRTFELDRCQUEwQjtBQUMxQix1RUFBbUU7QUFHbkUsSUFBYSxjQUFjLEdBQTNCLE1BQWEsY0FBZSxTQUFRLGdDQUFjO0lBQ2pELFlBQ2dDLGFBQXNCLEVBQ2pCLFdBQXlCO1FBRTdELEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUhVLGtCQUFhLEdBQWIsYUFBYSxDQUFTO1FBQ2pCLGdCQUFXLEdBQVgsV0FBVyxDQUFjO1FBRzdELElBQUksQ0FBQyxVQUFVLENBQUM7WUFDZixFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUs7Z0JBQ2xELFdBQVcsRUFBRyxDQUFDLElBQUksd0NBQWtCLENBQUMseUJBQVEsQ0FBQyxDQUFDLEVBQUU7WUFDbEQsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLO2dCQUNsRCxXQUFXLEVBQUcsQ0FBQyxJQUFJLHdDQUFrQixDQUFDLHVDQUFlLENBQUMsQ0FBQyxFQUFDO1lBQ3hELEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFDO1NBQzdDLENBQUMsQ0FBQztJQUNKLENBQUM7SUFHSyxLQUFLLENBQUMsRUFBQyxJQUFJLEVBQTRCLEVBQUUsR0FBYSxFQUFFLElBQWtCOztZQUMvRSxNQUFNLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzNELElBQUcsUUFBUSxFQUFDO2dCQUNYLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQzNCO1lBQ0QsSUFBSSxDQUFDLElBQUksc0JBQVMsQ0FBQyxHQUFHLEVBQUUsb0JBQW9CLENBQUMsQ0FBQyxDQUFDO1FBQ2hELENBQUM7S0FBQTtJQUVLLEtBQUssQ0FBQyxFQUFDLElBQUksRUFBbUMsRUFBRSxHQUFhLEVBQUUsSUFBa0I7O1lBQ3RGLE1BQU0sTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdkQsSUFBRyxNQUFNLEVBQUM7Z0JBQ1QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUUsTUFBTSxDQUFDLEVBQUUsRUFBQyxDQUFDLENBQUM7Z0JBQ25ELElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQy9CO2lCQUFJO2dCQUNKLElBQUksQ0FBQyxJQUFJLHNCQUFTLENBQUMsR0FBRyxFQUFFLG1CQUFtQixDQUFDLENBQUMsQ0FBQzthQUM5QztRQUNGLENBQUM7S0FBQTtJQUVELEtBQUssQ0FBQyxHQUFZLEVBQUUsR0FBYTtRQUNoQyxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUN2QixDQUFDO0NBQ0QsQ0FBQTtBQXJDWSxjQUFjO0lBRDFCLElBQUEsc0JBQVUsR0FBRTtJQUdWLFdBQUEsSUFBQSxrQkFBTSxFQUFDLGFBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUNyQixXQUFBLElBQUEsa0JBQU0sRUFBQyxhQUFLLENBQUMsWUFBWSxDQUFDLENBQUE7O0dBSGhCLGNBQWMsQ0FxQzFCO0FBckNZLHdDQUFjIn0=