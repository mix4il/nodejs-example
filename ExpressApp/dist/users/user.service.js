"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
const user_entity_1 = require("./user.entity");
const inversify_1 = require("inversify");
require("reflect-metadata");
let UserService = class UserService {
    validateUser({ email, password }) {
        return true;
    }
    createUser({ email, name, password }) {
        return __awaiter(this, void 0, void 0, function* () {
            const newUser = new user_entity_1.User(email, name);
            yield newUser.setPassword(password);
            return newUser;
        });
    }
};
UserService = __decorate([
    (0, inversify_1.injectable)()
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3VzZXJzL3VzZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBcUM7QUFFckMseUNBQXFDO0FBQ3JDLDRCQUEwQjtBQUsxQixJQUFhLFdBQVcsR0FBeEIsTUFBYSxXQUFXO0lBQ3BCLFlBQVksQ0FBQyxFQUFDLEtBQUssRUFBRSxRQUFRLEVBQVc7UUFDcEMsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVLLFVBQVUsQ0FBQyxFQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFtQjs7WUFDdEQsTUFBTSxPQUFPLEdBQUcsSUFBSSxrQkFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztZQUN0QyxNQUFNLE9BQU8sQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDcEMsT0FBTyxPQUFPLENBQUM7UUFDbkIsQ0FBQztLQUFBO0NBQ0osQ0FBQTtBQVZZLFdBQVc7SUFEdkIsSUFBQSxzQkFBVSxHQUFFO0dBQ0EsV0FBVyxDQVV2QjtBQVZZLGtDQUFXIn0=