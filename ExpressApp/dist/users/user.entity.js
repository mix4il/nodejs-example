"use strict";
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
exports.User = void 0;
const bcryptjs_1 = require("bcryptjs");
class User {
    constructor(_email, _name) {
        this._email = _email;
        this._name = _name;
    }
    get password() {
        return this._password;
    }
    get email() {
        return this._email;
    }
    get name() {
        return this._name;
    }
    setPassword(password) {
        return __awaiter(this, void 0, void 0, function* () {
            this._password = yield (0, bcryptjs_1.hash)(password, 10);
        });
    }
}
exports.User = User;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5lbnRpdHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdXNlcnMvdXNlci5lbnRpdHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsdUNBQThCO0FBRTlCLE1BQWEsSUFBSTtJQUdiLFlBQTZCLE1BQWMsRUFBbUIsS0FBYTtRQUE5QyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQW1CLFVBQUssR0FBTCxLQUFLLENBQVE7SUFDM0UsQ0FBQztJQUVELElBQUksUUFBUTtRQUNSLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUMxQixDQUFDO0lBRUQsSUFBSSxLQUFLO1FBQ0wsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxJQUFJLElBQUk7UUFDSixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDdEIsQ0FBQztJQUVZLFdBQVcsQ0FBQyxRQUFlOztZQUNwQyxJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sSUFBQSxlQUFJLEVBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzlDLENBQUM7S0FBQTtDQUNKO0FBckJELG9CQXFCQyJ9