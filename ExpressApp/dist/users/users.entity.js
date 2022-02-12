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
    constructor(_email, _name, password) {
        this._email = _email;
        this._name = _name;
        if (password)
            this._password = password;
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
    setPassword(password, salt) {
        return __awaiter(this, void 0, void 0, function* () {
            this._password = yield (0, bcryptjs_1.hash)(password, salt);
        });
    }
    compare(password) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, bcryptjs_1.compare)(password, this.password);
        });
    }
}
exports.User = User;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMuZW50aXR5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3VzZXJzL3VzZXJzLmVudGl0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBdUM7QUFLdkMsTUFBYSxJQUFJO0lBR2IsWUFBNkIsTUFBYyxFQUNyQixLQUFhLEVBQzlCLFFBQWdCO1FBRlEsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNyQixVQUFLLEdBQUwsS0FBSyxDQUFRO1FBRTFCLElBQUcsUUFBUTtZQUNYLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO0lBQ25DLENBQUM7SUFFRCxJQUFJLFFBQVE7UUFDUixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDMUIsQ0FBQztJQUVELElBQUksS0FBSztRQUNMLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUN2QixDQUFDO0lBRUQsSUFBSSxJQUFJO1FBQ0osT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3RCLENBQUM7SUFFWSxXQUFXLENBQUMsUUFBZSxFQUFFLElBQVc7O1lBQ2pELElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxJQUFBLGVBQUksRUFBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDaEQsQ0FBQztLQUFBO0lBRVksT0FBTyxDQUFDLFFBQWU7O1lBQ2hDLE9BQU8sTUFBTSxJQUFBLGtCQUFPLEVBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNsRCxDQUFDO0tBQUE7Q0FDSjtBQTdCRCxvQkE2QkMifQ==