"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Validation = void 0;
const validatorjs_1 = __importDefault(require("validatorjs"));
const lodash_1 = __importDefault(require("lodash"));
const Validation = (data, rules, message = "") => {
    const validate = new validatorjs_1.default(data, rules);
    if (validate.passes()) {
        return { status: 1, message: 'passed' };
    }
    const err = lodash_1.default.values(validate.errors.errors)[0][0]; //first error
    return { status: 0, message: err };
};
exports.Validation = Validation;
