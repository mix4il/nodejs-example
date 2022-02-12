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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnNSZWdpc3RyYXRpb24uZHRvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3VzZXJzL3VzZXJzUmVnaXN0cmF0aW9uLmR0by50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxxREFBbUQ7QUFHbkQsTUFBYSxlQUFlO0NBUzNCO0FBUEc7SUFEQyxJQUFBLHlCQUFPLEVBQUMsRUFBRSxFQUFFLEVBQUMsT0FBTyxFQUFHLHVCQUF1QixFQUFDLENBQUM7OzhDQUNuQztBQUdkO0lBREMsSUFBQSwwQkFBUSxFQUFDLEVBQUMsT0FBTyxFQUFHLHdCQUF3QixFQUFDLENBQUM7O2lEQUM5QjtBQUdqQjtJQURDLElBQUEsMEJBQVEsRUFBQyxFQUFDLE9BQU8sRUFBRyxxQkFBcUIsRUFBQyxDQUFDOzs2Q0FDL0I7QUFSakIsMENBU0MifQ==