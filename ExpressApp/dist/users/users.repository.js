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
exports.UsersRepository = void 0;
const inversify_1 = require("inversify");
const types_1 = require("../types");
require("reflect-metadata");
let UsersRepository = class UsersRepository {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    ;
    create({ email, password, name }) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.prismaService.clientPrisma.userModel.create({
                data: { email, password, name }
            });
        });
    }
    ;
    find(email) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.prismaService.clientPrisma.userModel.findFirst({
                where: { email }
            });
        });
    }
};
UsersRepository = __decorate([
    (0, inversify_1.injectable)(),
    __param(0, (0, inversify_1.inject)(types_1.TYPES.IPrismaService)),
    __metadata("design:paramtypes", [Object])
], UsersRepository);
exports.UsersRepository = UsersRepository;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMucmVwb3NpdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91c2Vycy91c2Vycy5yZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLHlDQUErQztBQUUvQyxvQ0FBaUM7QUFHakMsNEJBQTBCO0FBRzFCLElBQWEsZUFBZSxHQUE1QixNQUFhLGVBQWU7SUFFeEIsWUFBa0QsYUFBNkI7UUFBN0Isa0JBQWEsR0FBYixhQUFhLENBQWdCO0lBQUUsQ0FBQztJQUFBLENBQUM7SUFFN0UsTUFBTSxDQUFDLEVBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQU87O1lBQ3RDLE9BQU8sTUFBTSxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDO2dCQUMxRCxJQUFJLEVBQUUsRUFBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBQzthQUNoQyxDQUFDLENBQUM7UUFDUCxDQUFDO0tBQUE7SUFBQSxDQUFDO0lBRUksSUFBSSxDQUFDLEtBQWE7O1lBQ3BCLE9BQU8sTUFBTSxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDO2dCQUM3RCxLQUFLLEVBQUUsRUFBQyxLQUFLLEVBQUM7YUFDakIsQ0FBQyxDQUFBO1FBQ04sQ0FBQztLQUFBO0NBRUosQ0FBQTtBQWhCWSxlQUFlO0lBRDNCLElBQUEsc0JBQVUsR0FBRTtJQUdJLFdBQUEsSUFBQSxrQkFBTSxFQUFDLGFBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQTs7R0FGaEMsZUFBZSxDQWdCM0I7QUFoQlksMENBQWUifQ==