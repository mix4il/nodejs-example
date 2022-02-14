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
const jsonwebtoken_1 = require("jsonwebtoken");
let UserController = class UserController extends base_controller_1.BaseController {
    constructor(loggerService, userService, configService) {
        super(loggerService);
        this.loggerService = loggerService;
        this.userService = userService;
        this.configService = configService;
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
            const jwt = yield this.signJWT(body.email, this.configService.get('SECRET'));
            if (validate) {
                this.ok(res, { jwt });
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
    signJWT(email, secret) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                (0, jsonwebtoken_1.sign)({
                    email: email,
                    iat: Math.floor(Date.now() / 1000)
                }, secret, {
                    algorithm: 'RS256',
                }, (err, token) => {
                    if (err) {
                        reject(err);
                    }
                    resolve(token);
                });
            });
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
    __param(2, (0, inversify_1.inject)(types_1.TYPES.IConfigService)),
    __metadata("design:paramtypes", [Object, Object, Object])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMuY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91c2Vycy91c2Vycy5jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtEQUEyRDtBQUUzRCxxREFBaUQ7QUFDakQseUNBQStDO0FBQy9DLG9DQUFpQztBQUdqQyxxREFBNEM7QUFDNUMsbUVBQTBEO0FBRTFELDRCQUEwQjtBQUMxQix1RUFBbUU7QUFDbkUsK0NBQW9DO0FBSXBDLElBQWEsY0FBYyxHQUEzQixNQUFhLGNBQWUsU0FBUSxnQ0FBYztJQUNqRCxZQUNnQyxhQUFzQixFQUNqQixXQUF5QixFQUN2QixhQUE2QjtRQUVuRSxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUM7UUFKVSxrQkFBYSxHQUFiLGFBQWEsQ0FBUztRQUNqQixnQkFBVyxHQUFYLFdBQVcsQ0FBYztRQUN2QixrQkFBYSxHQUFiLGFBQWEsQ0FBZ0I7UUFHbkUsSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUNmLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSztnQkFDbEQsV0FBVyxFQUFHLENBQUMsSUFBSSx3Q0FBa0IsQ0FBQyx5QkFBUSxDQUFDLENBQUMsRUFBRTtZQUNsRCxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUs7Z0JBQ2xELFdBQVcsRUFBRyxDQUFDLElBQUksd0NBQWtCLENBQUMsdUNBQWUsQ0FBQyxDQUFDLEVBQUM7WUFDeEQsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUM7U0FDN0MsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUdLLEtBQUssQ0FBQyxFQUFDLElBQUksRUFB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