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
    constructor(logger, userController, exceptionFilter, configService, prismaService) {
        this.logger = logger;
        this.userController = userController;
        this.exceptionFilter = exceptionFilter;
        this.configService = configService;
        this.prismaService = prismaService;
        this.app = (0, express_1.default)();
        this.port = Number(this.configService.get('PORT'));
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
            this.prismaService.connect();
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
    __param(4, (0, inversify_1.inject)(types_1.TYPES.IPrismaService)),
    __metadata("design:paramtypes", [Object, users_controller_1.UserController, Object, Object, Object])
], App);
exports.App = App;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxzREFBbUQ7QUFFbkQsK0RBQTBEO0FBRTFELHlDQUErQztBQUMvQyxtQ0FBZ0M7QUFFaEMsNEJBQTBCO0FBRTFCLDZDQUFpQztBQUtqQyxJQUFhLEdBQUcsR0FBaEIsTUFBYSxHQUFHO0lBS2YsWUFDZ0MsTUFBZSxFQUNQLGNBQThCLEVBQzdCLGVBQWlDLEVBQ25DLGFBQTZCLEVBQzdCLGFBQTZCO1FBSnBDLFdBQU0sR0FBTixNQUFNLENBQVM7UUFDUCxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDN0Isb0JBQWUsR0FBZixlQUFlLENBQWtCO1FBQ25DLGtCQUFhLEdBQWIsYUFBYSxDQUFnQjtRQUM3QixrQkFBYSxHQUFiLGFBQWEsQ0FBZ0I7UUFFbkUsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFBLGlCQUFPLEdBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFFTyxhQUFhO1FBQ3BCLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUEsa0JBQUksR0FBRSxDQUFDLENBQUE7SUFDckIsQ0FBQztJQUVPLFNBQVM7UUFDaEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVPLGtCQUFrQjtRQUN6QixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7SUFDckUsQ0FBQztJQUVPLFlBQVk7UUFDbkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVZLElBQUk7O1lBQ2hCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUNyQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUM3QixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztZQUMxQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDcEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMscUJBQXFCLElBQUksQ0FBQyxJQUFJLFFBQVEsQ0FBQyxDQUFDO1FBQ3pELENBQUM7S0FBQTtDQUNELENBQUE7QUF4Q1ksR0FBRztJQURmLElBQUEsc0JBQVUsR0FBRTtJQU9WLFdBQUEsSUFBQSxrQkFBTSxFQUFDLGFBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUNyQixXQUFBLElBQUEsa0JBQU0sRUFBQyxhQUFLLENBQUMsZUFBZSxDQUFDLENBQUE7SUFDN0IsV0FBQSxJQUFBLGtCQUFNLEVBQUMsYUFBSyxDQUFDLGdCQUFnQixDQUFDLENBQUE7SUFDOUIsV0FBQSxJQUFBLGtCQUFNLEVBQUMsYUFBSyxDQUFDLGNBQWMsQ0FBQyxDQUFBO0lBQzVCLFdBQUEsSUFBQSxrQkFBTSxFQUFDLGFBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQTs2Q0FIMEIsaUNBQWM7R0FQMUQsR0FBRyxDQXdDZjtBQXhDWSxrQkFBRyJ9