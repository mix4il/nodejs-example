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
exports.LoginDto = void 0;
const class_validator_1 = require("class-validator");
class LoginDto {
}
__decorate([
    (0, class_validator_1.IsEmail)({}, { message: 'Невалидный логин' }),
    __metadata("design:type", String)
], LoginDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Невалидный пароль' }),
    __metadata("design:type", String)
], LoginDto.prototype, "password", void 0);
exports.LoginDto = LoginDto;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnNMb2dpbi5kdG8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdXNlcnMvdXNlcnNMb2dpbi5kdG8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEscURBQW1EO0FBRW5ELE1BQWEsUUFBUTtDQU1wQjtBQUpHO0lBREMsSUFBQSx5QkFBTyxFQUFDLEVBQUUsRUFBRSxFQUFDLE9BQU8sRUFBRSxrQkFBa0IsRUFBQyxDQUFDOzt1Q0FDN0I7QUFHZDtJQURDLElBQUEsMEJBQVEsRUFBQyxFQUFDLE9BQU8sRUFBRSxtQkFBbUIsRUFBQyxDQUFDOzswQ0FDeEI7QUFMckIsNEJBTUMifQ==