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
const userRegistration_dto_1 = require("./userRegistration.dto");
require("reflect-metadata");
const validate_middleware_1 = require("../common/validate.middleware");
let UserController = class UserController extends base_controller_1.BaseController {
    constructor(loggerService, userService) {
        super(loggerService);
        this.loggerService = loggerService;
        this.userService = userService;
        this.bindRoutes([
            { path: '/login', method: 'post', func: this.login },
            { path: '/admin', method: 'post', func: this.admin,
                middlewares: [new validate_middleware_1.ValidateMiddleware(userRegistration_dto_1.RegistrationDto)] },
            { path: '/', method: 'get', func: this.users },
        ]);
    }
    login({ body }, res, next) {
        console.log(body);
        next(new http_error_1.HTTPError(404, 'Страница не найдена'));
    }
    admin({ body }, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.userService.createUser(body);
            if (result) {
                this.ok(res, result);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMuY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91c2Vycy91c2Vycy5jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtEQUEyRDtBQUczRCxxREFBaUQ7QUFDakQseUNBQStDO0FBQy9DLG9DQUFpQztBQUlqQyxpRUFBeUQ7QUFFekQsNEJBQTBCO0FBQzFCLHVFQUFtRTtBQUduRSxJQUFhLGNBQWMsR0FBM0IsTUFBYSxjQUFlLFNBQVEsZ0NBQWM7SUFDakQsWUFDZ0MsYUFBc0IsRUFDakIsV0FBeUI7UUFFN0QsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBSFUsa0JBQWEsR0FBYixhQUFhLENBQVM7UUFDakIsZ0JBQVcsR0FBWCxXQUFXLENBQWM7UUFHN0QsSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUNmLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ3BELEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSztnQkFDbEQsV0FBVyxFQUFHLENBQUMsSUFBSSx3Q0FBa0IsQ0FBQyxzQ0FBZSxDQUFDLENBQUMsRUFBQztZQUN4RCxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRTtTQUM5QyxDQUFDLENBQUM7SUFDSixDQUFDO0lBR0QsS0FBSyxDQUFDLEVBQUMsSUFBSSxFQUE0QixFQUFFLEdBQWEsRUFBRSxJQUFrQjtRQUN6RSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xCLElBQUksQ0FBQyxJQUFJLHNCQUFTLENBQUMsR0FBRyxFQUFFLHFCQUFxQixDQUFDLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRUssS0FBSyxDQUFDLEVBQUMsSUFBSSxFQUFtQyxFQUFFLEdBQWEsRUFBRSxJQUFrQjs7WUFDdEYsTUFBTSxNQUFNLEdBQUcsTUFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN2RCxJQUFHLE1BQU0sRUFBQztnQkFDVCxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQztnQkFDckIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDL0I7aUJBQUk7Z0JBQ0osSUFBSSxDQUFDLElBQUksc0JBQVMsQ0FBQyxHQUFHLEVBQUUsbUJBQW1CLENBQUMsQ0FBQyxDQUFDO2FBQzlDO1FBQ0YsQ0FBQztLQUFBO0lBRUQsS0FBSyxDQUFDLEdBQVksRUFBRSxHQUFhO1FBQ2hDLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7Q0FDRCxDQUFBO0FBakNZLGNBQWM7SUFEMUIsSUFBQSxzQkFBVSxHQUFFO0lBR1YsV0FBQSxJQUFBLGtCQUFNLEVBQUMsYUFBSyxDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBQ3JCLFdBQUEsSUFBQSxrQkFBTSxFQUFDLGFBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQTs7R0FIaEIsY0FBYyxDQWlDMUI7QUFqQ1ksd0NBQWMifQ==