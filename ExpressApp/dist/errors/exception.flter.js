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
exports.ExceptionFilter = void 0;
const logger_service_1 = require("../logger/logger.service");
const http_error_1 = require("./http-error");
const inversify_1 = require("inversify");
const types_1 = require("../types");
require("reflect-metadata");
let ExceptionFilter = class ExceptionFilter {
    constructor(logger) {
        this.logger = logger;
    }
    catch(error, req, res, next) {
        if (error instanceof http_error_1.HTTPError) {
            this.logger.error(`[${error.context}] Error code: ${error.statusCode} - ${error.message}`);
            res.status(error.statusCode).send({ error: error.message });
        }
        else {
            this.logger.error(error.message);
            res.status(500).send({ error: error.message });
        }
    }
};
ExceptionFilter = __decorate([
    (0, inversify_1.injectable)(),
    __param(0, (0, inversify_1.inject)(types_1.TYPES.ILogger)),
    __metadata("design:paramtypes", [logger_service_1.LoggerService])
], ExceptionFilter);
exports.ExceptionFilter = ExceptionFilter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhjZXB0aW9uLmZsdGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2Vycm9ycy9leGNlcHRpb24uZmx0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkRBQXlEO0FBR3pELDZDQUF5QztBQUN6Qyx5Q0FBK0M7QUFDL0Msb0NBQWlDO0FBQ2pDLDRCQUEwQjtBQUcxQixJQUFhLGVBQWUsR0FBNUIsTUFBYSxlQUFlO0lBQzNCLFlBQTJDLE1BQXFCO1FBQXJCLFdBQU0sR0FBTixNQUFNLENBQWU7SUFDaEUsQ0FBQztJQUVELEtBQUssQ0FBQyxLQUF3QixFQUFFLEdBQVksRUFBRSxHQUFhLEVBQUUsSUFBa0I7UUFDOUUsSUFBSSxLQUFLLFlBQVksc0JBQVMsRUFBRTtZQUMvQixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssQ0FBQyxPQUFPLGlCQUFpQixLQUFLLENBQUMsVUFBVSxNQUFNLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1lBQzNGLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztTQUM1RDthQUFNO1lBQ04sSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ2pDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1NBQy9DO0lBQ0YsQ0FBQztDQUNELENBQUE7QUFiWSxlQUFlO0lBRDNCLElBQUEsc0JBQVUsR0FBRTtJQUVDLFdBQUEsSUFBQSxrQkFBTSxFQUFDLGFBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQTtxQ0FBaUIsOEJBQWE7R0FEcEQsZUFBZSxDQWEzQjtBQWJZLDBDQUFlIn0=