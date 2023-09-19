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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_model_1 = require("./user.model");
const validator_1 = require("../common/validator");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let request = req.body;
        let { status, message } = yield (0, validator_1.Validation)(request, {
            name: "required",
            email: "required",
            password: "required"
        });
        if (!status) {
            throw new Error(message);
        }
        let exists = yield user_model_1.User.findOne({ email: request.email });
        if (exists) {
            throw new Error("Account with this email is already registered!");
        }
        const salt = yield bcryptjs_1.default.genSaltSync(10);
        const hashedPassword = yield bcryptjs_1.default.hash(request.password, salt);
        yield user_model_1.User.create({
            name: request.name,
            email: request.email,
            password: hashedPassword
        });
        return res.status(200).json({ message: "Account registered!" });
    }
    catch (err) {
        return res.status(500).json({ message: err.message });
    }
});
exports.default = {
    register
};
