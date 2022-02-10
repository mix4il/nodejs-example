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
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistrationDto = void 0;
const class_validator_1 = require("class-validator");
class RegistrationDto {
}
__decorate([
    (0, class_validator_1.IsEmail)({}, { message: 'Неверно укаазан email' }),
    __metadata("design:type", String)
], RegistrationDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Неверно укаазан пароль' }),
    __metadata("design:type", String)
], RegistrationDto.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Неверно указано имя' }),
    __metadata("design:type", String)
], RegistrationDto.prototype, "name", void 0);
exports.RegistrationDto = RegistrationDto;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlclJlZ2lzdHJhdGlvbi5kdG8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdXNlcnMvdXNlclJlZ2lzdHJhdGlvbi5kdG8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEscURBQW1EO0FBR25ELE1BQWEsZUFBZTtDQVMzQjtBQVBHO0lBREMsSUFBQSx5QkFBTyxFQUFDLEVBQUUsRUFBRSxFQUFDLE9BQU8sRUFBRyx1QkFBdUIsRUFBQyxDQUFDOzs4Q0FDbkM7QUFHZDtJQURDLElBQUEsMEJBQVEsRUFBQyxFQUFDLE9BQU8sRUFBRyx3QkFBd0IsRUFBQyxDQUFDOztpREFDOUI7QUFHakI7SUFEQyxJQUFBLDBCQUFRLEVBQUMsRUFBQyxPQUFPLEVBQUcscUJBQXFCLEVBQUMsQ0FBQzs7NkNBQy9CO0FBUmpCLDBDQVNDIn0=