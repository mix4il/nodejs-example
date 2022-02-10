"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigService = void 0;
const dotenv_1 = require("dotenv");
class ConfigService {
    constructor() {
        const result = (0, dotenv_1.config)();
        if (result.error) {
            console.error('Файла .env не существует или его невозможно прочитать.');
        }
        else {
            this.configuration = result.parsed;
        }
    }
    get(key) {
        return this.configuration[key];
    }
    ;
}
exports.ConfigService = ConfigService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29uZmlnL2NvbmZpZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLG1DQUFvRTtBQUdwRSxNQUFhLGFBQWE7SUFFdEI7UUFDSSxNQUFNLE1BQU0sR0FBd0IsSUFBQSxlQUFNLEdBQUUsQ0FBQztRQUM3QyxJQUFHLE1BQU0sQ0FBQyxLQUFLLEVBQUM7WUFDWixPQUFPLENBQUMsS0FBSyxDQUFDLHdEQUF3RCxDQUFDLENBQUM7U0FDM0U7YUFBSTtZQUNELElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLE1BQTJCLENBQUM7U0FDM0Q7SUFDTCxDQUFDO0lBRUQsR0FBRyxDQUE4QixHQUFXO1FBQ3hDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQU0sQ0FBQztJQUN4QyxDQUFDO0lBQUEsQ0FBQztDQUNMO0FBZEQsc0NBY0MifQ==