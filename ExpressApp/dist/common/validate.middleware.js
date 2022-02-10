"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidateMiddleware = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
require("reflect-metadata");
class ValidateMiddleware {
    constructor(classToValidate) {
        this.classToValidate = classToValidate;
    }
    execute({ body }, res, next) {
        const instance = (0, class_transformer_1.plainToClass)(this.classToValidate, body);
        (0, class_validator_1.validate)(instance).then(error => {
            if (error.length > 0) {
                res.status(422).send({ message: error });
            }
            else {
                next();
            }
        });
    }
}
exports.ValidateMiddleware = ValidateMiddleware;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGUubWlkZGxld2FyZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vdmFsaWRhdGUubWlkZGxld2FyZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFFQSx5REFBb0Y7QUFDcEYscURBQXlDO0FBQ3pDLDRCQUEwQjtBQUcxQixNQUFhLGtCQUFrQjtJQUUzQixZQUFvQixlQUF5QztRQUF6QyxvQkFBZSxHQUFmLGVBQWUsQ0FBMEI7SUFDN0QsQ0FBQztJQUVKLE9BQU8sQ0FBQyxFQUFFLElBQUksRUFBVyxFQUFFLEdBQWEsRUFBRSxJQUFrQjtRQUNyRCxNQUFNLFFBQVEsR0FBRyxJQUFBLGdDQUFZLEVBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMxRCxJQUFBLDBCQUFRLEVBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzVCLElBQUcsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUM7Z0JBQ2hCLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFHLEtBQUssRUFBQyxDQUFDLENBQUM7YUFDNUM7aUJBQUk7Z0JBQ0QsSUFBSSxFQUFFLENBQUM7YUFDVjtRQUNMLENBQUMsQ0FBQyxDQUFDO0lBRVYsQ0FBQztDQUNEO0FBaEJELGdEQWdCQyJ9