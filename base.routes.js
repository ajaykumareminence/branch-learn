"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.baseRoutes = void 0;
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const user_routes_1 = require("./user/user.routes");
app.use('/user', user_routes_1.userRoutes);
exports.baseRoutes = app;
