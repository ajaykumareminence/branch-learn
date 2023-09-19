"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_controller_1 = __importDefault(require("./user.controller"));
const router = express_1.default.Router();
router.post('/register', user_controller_1.default.register);
exports.userRoutes = router;
