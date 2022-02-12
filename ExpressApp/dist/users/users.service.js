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
exports.UserService = void 0;
const users_entity_1 = require("./users.entity");
const inversify_1 = require("inversify");
require("reflect-metadata");
const types_1 = require("../types");
let UserService = class UserService {
    constructor(configService, userRepository) {
        this.configService = configService;
        this.userRepository = userRepository;
    }
    validateUser({ email, password }) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.userRepository.find(email);
            if (!result) {
                return false;
            }
            const userCheck = new users_entity_1.User(result.email, result.name, result.password);
            return yield userCheck.compare(password);
        });
    }
    createUser({ email, name, password }) {
        return __awaiter(this, void 0, void 0, function* () {
            const existUser = yield this.userRepository.find(email);
            if (existUser) {
                return null;
            }
            const newUser = new users_entity_1.User(email, name);
            const salt = this.configService.get('SALT');
            yield newUser.setPassword(password, Number(salt));
            return yield this.userRepository.create(newUser);
        });
    }
};
UserService = __decorate([
    (0, inversify_1.injectable)(),
    __param(0, (0, inversify_1.inject)(types_1.TYPES.IConfigService)),
    __param(1, (0, inversify_1.inject)(types_1.TYPES.IUsersRepository)),
    __metadata("design:paramtypes", [Object, Object])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91c2Vycy91c2Vycy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlEQUFzQztBQUV0Qyx5Q0FBNkM7QUFDN0MsNEJBQTBCO0FBRzFCLG9DQUFpQztBQU1qQyxJQUFhLFdBQVcsR0FBeEIsTUFBYSxXQUFXO0lBRXBCLFlBQzBDLGFBQThCLEVBQzVCLGNBQWlDO1FBRG5DLGtCQUFhLEdBQWIsYUFBYSxDQUFpQjtRQUM1QixtQkFBYyxHQUFkLGNBQWMsQ0FBbUI7SUFBRSxDQUFDO0lBRTFFLFlBQVksQ0FBQyxFQUFDLEtBQUssRUFBRSxRQUFRLEVBQVc7O1lBQzFDLE1BQU0sTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDckQsSUFBRyxDQUFDLE1BQU0sRUFBQztnQkFDUCxPQUFPLEtBQUssQ0FBQzthQUNoQjtZQUNELE1BQU0sU0FBUyxHQUFHLElBQUksbUJBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3RFLE9BQU8sTUFBTSxTQUFTLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRTdDLENBQUM7S0FBQTtJQUVLLFVBQVUsQ0FBQyxFQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFtQjs7WUFDdEQsTUFBTSxTQUFTLEdBQUcsTUFBTSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN4RCxJQUFHLFNBQVMsRUFBQztnQkFDVCxPQUFPLElBQUksQ0FBQzthQUNmO1lBQ0QsTUFBTSxPQUFPLEdBQUcsSUFBSSxtQkFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztZQUN0QyxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM1QyxNQUFNLE9BQU8sQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ2xELE9BQU8sTUFBTSxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNyRCxDQUFDO0tBQUE7Q0FDSixDQUFBO0FBMUJZLFdBQVc7SUFEdkIsSUFBQSxzQkFBVSxHQUFFO0lBSUosV0FBQSxJQUFBLGtCQUFNLEVBQUMsYUFBSyxDQUFDLGNBQWMsQ0FBQyxDQUFBO0lBQzVCLFdBQUEsSUFBQSxrQkFBTSxFQUFDLGFBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBOztHQUoxQixXQUFXLENBMEJ2QjtBQTFCWSxrQ0FBVyJ9