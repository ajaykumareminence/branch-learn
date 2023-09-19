"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const { DB_CONN_STRING, DB_NAME } = process.env;
mongoose_1.default.connect(`${DB_CONN_STRING}/${DB_NAME}`)
    .then(() => {
    console.log(`Successfully connected with mongodb!!`);
})
    .catch((err) => {
    console.log("Error while connecting with mongodb => " + err.message);
    process.exit(1);
});
