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
exports.User = void 0;
function Component(newId) {
    console.log(newId, 'Component ');
    return function (target) {
        target.prototype.id = newId;
    };
}
function Logger(target) {
    console.log(target.name);
}
function Method(target, propertyKey, propertyDescriptor) {
    console.log(propertyKey);
    const oldValue = propertyDescriptor.value;
    propertyDescriptor.value = function (...args) {
        return args[0] * 20;
    };
}
function Props(target, propertyKey) {
    let value;
    const getter = () => {
        console.log('Getter');
        return value;
    };
    const setter = (newValue) => {
        console.log('Set');
        value = newValue;
    };
    Object.defineProperty(target, propertyKey, {
        get: getter,
        set: setter,
    });
}
function Param(target, propertyKey, index) {
    console.log(propertyKey, index);
}
let User = class User {
    updatedId(newId) {
        this.id = newId;
        return this.id;
    }
};
__decorate([
    Props,
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    Method,
    __param(0, Param),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], User.prototype, "updatedId", null);
User = __decorate([
    Logger,
    Component(1)
], User);
exports.User = User;
console.log(new User().updatedId(10), new User().id);
class CliOutput {
    print(message) {
        process.stdout.write(message);
    }
}
class Dog {
    constructor(output) {
        this.output = output;
    }
    bark(message) {
        this.output.print(message);
    }
}
const cli = new CliOutput();
new Dog(cli).bark('bow-bow');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVjb3JhdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2RlY29yYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSxTQUFTLFNBQVMsQ0FBQyxLQUFhO0lBQy9CLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQ2pDLE9BQU8sVUFBVSxNQUFnQjtRQUNoQyxNQUFNLENBQUMsU0FBUyxDQUFDLEVBQUUsR0FBRyxLQUFLLENBQUM7SUFDN0IsQ0FBQyxDQUFDO0FBQ0gsQ0FBQztBQUVELFNBQVMsTUFBTSxDQUFDLE1BQWdCO0lBQy9CLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzFCLENBQUM7QUFFRCxTQUFTLE1BQU0sQ0FBQyxNQUFjLEVBQUUsV0FBbUIsRUFBRSxrQkFBc0M7SUFDMUYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN6QixNQUFNLFFBQVEsR0FBRyxrQkFBa0IsQ0FBQyxLQUFLLENBQUM7SUFDMUMsa0JBQWtCLENBQUMsS0FBSyxHQUFHLFVBQVUsR0FBRyxJQUFXO1FBQ2xELE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUNyQixDQUFDLENBQUM7QUFDSCxDQUFDO0FBRUQsU0FBUyxLQUFLLENBQUMsTUFBYyxFQUFFLFdBQW1CO0lBQ2pELElBQUksS0FBYSxDQUFDO0lBRWxCLE1BQU0sTUFBTSxHQUFHLEdBQUcsRUFBRTtRQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3RCLE9BQU8sS0FBSyxDQUFDO0lBQ2QsQ0FBQyxDQUFDO0lBRUYsTUFBTSxNQUFNLEdBQUcsQ0FBQyxRQUFnQixFQUFFLEVBQUU7UUFDbkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuQixLQUFLLEdBQUcsUUFBUSxDQUFDO0lBQ2xCLENBQUMsQ0FBQztJQUVGLE1BQU0sQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUMxQyxHQUFHLEVBQUUsTUFBTTtRQUNYLEdBQUcsRUFBRSxNQUFNO0tBQ1gsQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQUVELFNBQVMsS0FBSyxDQUFDLE1BQWMsRUFBRSxXQUFtQixFQUFFLEtBQWE7SUFDaEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDakMsQ0FBQztBQUlELElBQWEsSUFBSSxHQUFqQixNQUFhLElBQUk7SUFLaEIsU0FBUyxDQUFRLEtBQWE7UUFDN0IsSUFBSSxDQUFDLEVBQUUsR0FBRyxLQUFLLENBQUM7UUFDaEIsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDO0lBQ2hCLENBQUM7Q0FDRCxDQUFBO0FBUEE7SUFEQyxLQUFLOztnQ0FDTTtBQUdaO0lBREMsTUFBTTtJQUNJLFdBQUEsS0FBSyxDQUFBOzs7O3FDQUdmO0FBUlcsSUFBSTtJQUZoQixNQUFNO0lBQ04sU0FBUyxDQUFDLENBQUMsQ0FBQztHQUNBLElBQUksQ0FTaEI7QUFUWSxvQkFBSTtBQVdqQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7QUFNckQsTUFBTSxTQUFTO0lBQ1AsS0FBSyxDQUFDLE9BQWU7UUFDM0IsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDL0IsQ0FBQztDQUNEO0FBRUQsTUFBTSxHQUFHO0lBQ1IsWUFBb0IsTUFBZTtRQUFmLFdBQU0sR0FBTixNQUFNLENBQVM7SUFBRyxDQUFDO0lBRXZDLElBQUksQ0FBQyxPQUFlO1FBQ25CLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzVCLENBQUM7Q0FDRDtBQUVELE1BQU0sR0FBRyxHQUFjLElBQUksU0FBUyxFQUFFLENBQUM7QUFDdkMsSUFBSSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDIn0=