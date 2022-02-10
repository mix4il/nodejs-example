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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const express_1 = __importDefault(require("express"));
const users_controller_1 = require("./users/users.controller");
const inversify_1 = require("inversify");
const types_1 = require("./types");
require("reflect-metadata");
const body_parser_1 = require("body-parser");
let App = class App {
    constructor(logger, userController, exceptionFilter, configService) {
        this.logger = logger;
        this.userController = userController;
        this.exceptionFilter = exceptionFilter;
        this.configService = configService;
        this.app = (0, express_1.default)();
        this.port = configService.get("PORT");
    }
    useMiddleware() {
        this.app.use((0, body_parser_1.json)());
    }
    useRouter() {
        this.app.use('/users', this.userController.router);
    }
    useExceptionFilter() {
        this.app.use(this.exceptionFilter.catch.bind(this.exceptionFilter));
    }
    listenServer() {
        this.server = this.app.listen(this.port);
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            this.useMiddleware();
            this.useRouter();
            this.useExceptionFilter();
            this.listenServer();
            this.logger.log(`Сервер запущен на ${this.port} порту`);
        });
    }
};
App = __decorate([
    (0, inversify_1.injectable)(),
    __param(0, (0, inversify_1.inject)(types_1.TYPES.ILogger)),
    __param(1, (0, inversify_1.inject)(types_1.TYPES.IUserController)),
    __param(2, (0, inversify_1.inject)(types_1.TYPES.IExceptionFilter)),
    __param(3, (0, inversify_1.inject)(types_1.TYPES.IConfigService)),
    __metadata("design:paramtypes", [Object, users_controller_1.UserController, Object, Object])
], App);
exports.App = App;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxzREFBbUQ7QUFFbkQsK0RBQTBEO0FBRTFELHlDQUErQztBQUMvQyxtQ0FBZ0M7QUFFaEMsNEJBQTBCO0FBRTFCLDZDQUFpQztBQUlqQyxJQUFhLEdBQUcsR0FBaEIsTUFBYSxHQUFHO0lBS2YsWUFDZ0MsTUFBZSxFQUNQLGNBQThCLEVBQzdCLGVBQWlDLEVBQ25DLGFBQTZCO1FBSHBDLFdBQU0sR0FBTixNQUFNLENBQVM7UUFDUCxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDN0Isb0JBQWUsR0FBZixlQUFlLENBQWtCO1FBQ25DLGtCQUFhLEdBQWIsYUFBYSxDQUFnQjtRQUVuRSxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUEsaUJBQU8sR0FBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxJQUFJLEdBQUcsYUFBYSxDQUFDLEdBQUcsQ0FBUyxNQUFNLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRU8sYUFBYTtRQUNwQixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFBLGtCQUFJLEdBQUUsQ0FBQyxDQUFBO0lBQ3JCLENBQUM7SUFFTyxTQUFTO1FBQ2hCLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFFTyxrQkFBa0I7UUFDekIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7SUFFTyxZQUFZO1FBQ25CLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFWSxJQUFJOztZQUNoQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDckIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1lBQzFCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUNwQixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsSUFBSSxDQUFDLElBQUksUUFBUSxDQUFDLENBQUM7UUFDekQsQ0FBQztLQUFBO0NBQ0QsQ0FBQTtBQXRDWSxHQUFHO0lBRGYsSUFBQSxzQkFBVSxHQUFFO0lBT1YsV0FBQSxJQUFBLGtCQUFNLEVBQUMsYUFBSyxDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBQ3JCLFdBQUEsSUFBQSxrQkFBTSxFQUFDLGFBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQTtJQUM3QixXQUFBLElBQUEsa0JBQU0sRUFBQyxhQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQTtJQUM5QixXQUFBLElBQUEsa0JBQU0sRUFBQyxhQUFLLENBQUMsY0FBYyxDQUFDLENBQUE7NkNBRjBCLGlDQUFjO0dBUDFELEdBQUcsQ0FzQ2Y7QUF0Q1ksa0JBQUcifQ==