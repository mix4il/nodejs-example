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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigService = void 0;
const dotenv_1 = require("dotenv");
const inversify_1 = require("inversify");
const types_1 = require("../types");
let ConfigService = class ConfigService {
    constructor(loggerService) {
        this.loggerService = loggerService;
        const result = (0, dotenv_1.config)();
        if (result.error) {
            this.loggerService.error('Файла .env не существует или его невозможно прочитать.');
        }
        else {
            this.configuration = result.parsed;
        }
    }
    get(key) {
        return this.configuration[key];
    }
    ;
};
ConfigService = __decorate([
    (0, inversify_1.injectable)(),
    __param(0, (0, inversify_1.inject)(types_1.TYPES.ILogger)),
    __metadata("design:paramtypes", [Object])
], ConfigService);
exports.ConfigService = ConfigService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29uZmlnL2NvbmZpZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG1DQUFvRTtBQUNwRSx5Q0FBK0M7QUFFL0Msb0NBQWlDO0FBSWpDLElBQWEsYUFBYSxHQUExQixNQUFhLGFBQWE7SUFFdEIsWUFBMkMsYUFBc0I7UUFBdEIsa0JBQWEsR0FBYixhQUFhLENBQVM7UUFDN0QsTUFBTSxNQUFNLEdBQXdCLElBQUEsZUFBTSxHQUFFLENBQUM7UUFDN0MsSUFBRyxNQUFNLENBQUMsS0FBSyxFQUFDO1lBQ1osSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsd0RBQXdELENBQUMsQ0FBQztTQUN0RjthQUFJO1lBQ0QsSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsTUFBMkIsQ0FBQztTQUMzRDtJQUNMLENBQUM7SUFFRCxHQUFHLENBQUMsR0FBVztRQUNYLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBQUEsQ0FBQztDQUNMLENBQUE7QUFkWSxhQUFhO0lBRHpCLElBQUEsc0JBQVUsR0FBRTtJQUdJLFdBQUEsSUFBQSxrQkFBTSxFQUFDLGFBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQTs7R0FGekIsYUFBYSxDQWN6QjtBQWRZLHNDQUFhIn0=