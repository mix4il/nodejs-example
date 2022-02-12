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
exports.PrismaService = void 0;
const client_1 = require("@prisma/client");
const inversify_1 = require("inversify");
const types_1 = require("../types");
require("reflect-metadata");
let PrismaService = class PrismaService {
    constructor(logger) {
        this.logger = logger;
        this._clientPrisma = new client_1.PrismaClient();
    }
    get clientPrisma() {
        return this._clientPrisma;
    }
    connect() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.clientPrisma.$connect();
                this.logger.log('[PrismaService] Succesful connect!');
            }
            catch (err) {
                this.logger.error('[PrismaService] Error connecting');
            }
        });
    }
    disconnect() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.clientPrisma.$disconnect();
                this.logger.log('[PrismaService] Succesful disconnecting!');
            }
            catch (err) {
                this.logger.error('[PrismaService] Error connecting');
            }
        });
    }
};
PrismaService = __decorate([
    (0, inversify_1.injectable)(),
    __param(0, (0, inversify_1.inject)(types_1.TYPES.ILogger)),
    __metadata("design:paramtypes", [Object])
], PrismaService);
exports.PrismaService = PrismaService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpc21hU2VydmljZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2RhdGFiYXNlL3ByaXNtYVNlcnZpY2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBeUQ7QUFDekQseUNBQStDO0FBRS9DLG9DQUFpQztBQUVqQyw0QkFBMEI7QUFHMUIsSUFBYSxhQUFhLEdBQTFCLE1BQWEsYUFBYTtJQUd0QixZQUEyQyxNQUFnQjtRQUFoQixXQUFNLEdBQU4sTUFBTSxDQUFVO1FBQ3ZELElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxxQkFBWSxFQUFFLENBQUM7SUFDNUMsQ0FBQztJQUVELElBQUksWUFBWTtRQUNaLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUM5QixDQUFDO0lBRUssT0FBTzs7WUFDVCxJQUFHO2dCQUNDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQzdCLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLG9DQUFvQyxDQUFDLENBQUM7YUFDekQ7WUFBQSxPQUFNLEdBQUcsRUFBQztnQkFDUCxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFBO2FBQ3hEO1FBQ0wsQ0FBQztLQUFBO0lBRUssVUFBVTs7WUFDWixJQUFHO2dCQUNDLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBQ2hDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLDBDQUEwQyxDQUFDLENBQUM7YUFDL0Q7WUFBQSxPQUFNLEdBQUcsRUFBQztnQkFDUCxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDO2FBQ3pEO1FBQ0wsQ0FBQztLQUFBO0NBQ0osQ0FBQTtBQTVCWSxhQUFhO0lBRHpCLElBQUEsc0JBQVUsR0FBRTtJQUlJLFdBQUEsSUFBQSxrQkFBTSxFQUFDLGFBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQTs7R0FIekIsYUFBYSxDQTRCekI7QUE1Qlksc0NBQWEifQ==